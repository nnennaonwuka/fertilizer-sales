/* eslint-disable prettier/prettier */
import { Repository, getRepository } from 'typeorm';
import { transacting_memberEntity } from '../entities/transacting-member.entity';
import { Transacting_member } from '../interfaces/transacting-member.interface';
import { isEmpty } from 'class-validator';
import { HttpException } from '../exceptions/httpException'

class TransactingMemberService extends Repository<transacting_memberEntity> {
    public async syncUpTransactingMember(data: Transacting_member[]): Promise<Array<{}>> {
        const repository = getRepository(transacting_memberEntity);

        const responseData = await Promise.all(
            data.map(async (item) => {
                try {
                    await repository.save(item);
                    return {
                        unique_member_id: item.unique_member_id,
                        transaction_id: item.transaction_id,
                        status: 1,
                        message: 'Item was uploaded/updated successfully'
                    };
                } catch (error) {
                    return{
                        unique_member_id: item.unique_member_id,
                        transaction_id: item.transaction_id,
                        status: 0,
                        message: error.message,
                    };
                }
            })
        );

        return responseData;
    }

    public async syncDownTransactingMember(lastSyncTime: string, uniqueMemberId: string, transactionId: string): Promise<Transacting_member[]> {
        const repository = getRepository(transacting_memberEntity);

        try {
            const givenSyncTime = new Date(lastSyncTime).toISOString();
            const data = await repository
                .createQueryBuilder('table')
                .select()
                // where ('table.staff_id = :staffId AND table.updated_at >= :givenSyncTime', { staffId, givenSyncTime })
                .where('table.updated_at >= :givenSyncTime AND table.unique_member_id = :uniqueMemberId AND table.transaction_id = :transactionId', { givenSyncTime, uniqueMemberId, transactionId})
                .getMany();
            return data;    
        } catch (error) {
            throw error;
        }
    }
    public transactingMember = transacting_memberEntity;

    public async findAllTransactingMembers(): Promise<Transacting_member[]> {
        const transactingMemberRepository = getRepository(this.transactingMember);
        const transactingMember: Transacting_member[] = await transactingMemberRepository.find({ relations: ['unique_member_id']});
        return transactingMember;
    }

    public async deleteTransactingMember(id: string): Promise<Transacting_member> {
        if (isEmpty(id)) throw new HttpException(400, 'please input unique_member_id');

        const transactingMemberRepository = getRepository(this.transactingMember);
        const findTransactingMember: Transacting_member = await transactingMemberRepository.findOne({ where: { unique_member_id: id } });
        if (!findTransactingMember) throw new HttpException(409, 'transacting member with ' + id + ' does not exist');

        await transactingMemberRepository.delete({ unique_member_id: id })
        return findTransactingMember;
    }
}

export default TransactingMemberService;