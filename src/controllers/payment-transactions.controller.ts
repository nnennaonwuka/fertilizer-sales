/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import PaymentTransactionsService from '../services/payment_transaction.service';
import { isEmpty } from '../utils/util';
import { HttpException } from '../exceptions/httpException';

class PaymentTransactionsController {
    public PaymentTransactionsService = new PaymentTransactionsService();

    public uploadPaymentTransactionsList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (isEmpty(req.body) || !Array.isArray(req.body)) {
                throw new HttpException(400, 'Please inclide appropriate data for upload');
            }

            const data = await this.PaymentTransactionsService.syncUpPaymentTransactions(req.body);

            res.status(200).json({
                data,
                message: 'upload complete'
            });
        } catch (error) {
           next (error); 
        }
    };

    public downloadPaymentTransactionsList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (isEmpty(req.query.last_sync_time) || isEmpty(req.query.transaction_id)) {
                throw new HttpException(400, 'Please include appropriate query with last_sync_time and transaction_id');
            };

            const data = await this.PaymentTransactionsService.syncDownPaymentTransactions(req.query.last_sync_time as string, req.query.transaction_id as string);

            res.status(200).json({
                data,
                message: 'download complete'
            });
        } catch (error) {
          next (error);  
        }
    };
}

export default PaymentTransactionsController;

