/* eslint-disable prettier/prettier */
import { Repository, getRepository } from 'typeorm';
import { TransferDetails } from '../entities/transfer-details.entity';
import { transfer_details } from '../interfaces/transfer-details.interface';

class TransferDetailsService extends Repository<TransferDetails> {
    public async syncUpTransferDetails(data: TransferDetails[]): Promise<Array<{}>> {
        const repository = getRepository(TransferDetails);

        const responseData = await Promise.all(
            data.map(async (item) => {
                try {
                   await repository.save(item);
                   return {
                    transaction_id: item.transaction_id,
                    status: 1,
                    message: 'Item was successfully uploaded/updated',
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

    public async syncDownTransferDetails(last_sync_time: string, transaction_id: string): Promise<transfer_details[]> {
        const repository = getRepository(TransferDetails)
        try {
            const givenSyncTime = new Date (last_sync_time).toISOString();
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

export default TransferDetailsService;