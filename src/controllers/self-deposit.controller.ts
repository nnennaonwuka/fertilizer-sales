/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import SelfDepositService from '../services/self_deposit.service';
import { isEmpty } from '../utils/util';
import { HttpException } from '../exceptions/httpException';

class SelfDepositController {
    public SelfDepositService = new SelfDepositService();

    public uploadSelfDepositList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (isEmpty(req.body) || !Array.isArray(req.body)) {
                throw new HttpException(400, 'Please inclide appropriate data for upload');
            }

            const data = await this.SelfDepositService.syncUpSelfDeposit(req.body);

            res.status(200).json({
                data,
                message: 'upload complete'
            })
        } catch (error) {
           next (error) 
        }
    };

    public downloadSelfDepositList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (isEmpty(req.query.last_sync_time) || isEmpty(req.query.transaction_id)) {
                throw new HttpException(400, 'Please include appropriate query with last_sync_time and transaction_id');
            };

            const data = await this.SelfDepositService.syncDownSelfDeposit(req.query.last_sync_time as string, req.query.transaction_id as string);

            res.status(200).json({
                data,
                message: 'download complete'
            });
        } catch (error) {
            next(error);
        }
    };
}

export default SelfDepositController;