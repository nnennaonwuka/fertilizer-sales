/* eslint-disable prettier/prettier */
import { Repository, getRepository } from 'typeorm';
import { PaymentTransaction } from '../entities/payment-transaction.entity';
import { Payment_Transactions } from '../interfaces/payment-transactions.interface';

class PaymentTransactionsService extends Repository<PaymentTransaction> {
    public async syncUpPaymentTransactions(data: PaymentTransaction[]): Promise<Array<{}>> {
        const repository = getRepository(PaymentTransaction);

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
                   return{
                    transaction_id: item.transaction_id,
                    status: 0,
                    message: error.message
                   }; 
                }
            }),
        );

        return responseData;
    }

    public async syncDownPaymentTransactions(last_sync_time: string, transaction_id: string): Promise<Payment_Transactions[]> {
        const repository = getRepository(PaymentTransaction)
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

export default PaymentTransactionsService;