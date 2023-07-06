/* eslint-disable prettier/prettier */
import { Repository, getRepository } from 'typeorm';
import { SelfDeposity } from '../entities/self-deposit.entity';
import { self_deposit } from '../interfaces/self-deposit.interface';

class SelfDepositService extends Repository<SelfDeposity> {
    public async syncUpSelfDeposit(data: SelfDeposity[]): Promise<Array<{}>> {
        const repository = getRepository(SelfDeposity);

        const responseData = await Promise.all(
            data.map(async (item) => {
                try {
                    await repository.save(item);
                    return {
                        transaction_id: item.transaction_id,
                        status: 1,
                        message: 'Item was successfully uploaded/updated'
                    }
                } catch (error) {
                   return {
                    transaction_id: item.transaction_id,
                    status: 0,
                    message: error.message
                   }; 
                }
            }),
        );

        return responseData;
    }

    public async syncDownSelfDeposit(last_sync_time: string, transaction_id: string): Promise<self_deposit[]> {
        const repository = getRepository(SelfDeposity)
        try {
            const givenSyncTime = new Date(last_sync_time).toISOString();
            const data = await repository.createQueryBuilder('table')
                .select()
                .where('table.transaction_id = :transaction_id AND table.updated_at >= :givenSyncTime', { givenSyncTime, transaction_id })
                .getMany();
            return data;
        } catch (error) {
           throw error; 
        }
    }
}

export default SelfDepositService;
