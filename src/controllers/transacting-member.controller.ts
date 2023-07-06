/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import TransactingMemberService from '../services/transacting_member.service';
import { isEmpty } from '../utils/util';
import { HttpException } from '../exceptions/httpException';

class TransactingMemberController {
    public TransactingMemberService = new TransactingMemberService();
    
    public syncUpTransactingMemberArray = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (isEmpty(req.body) || !Array.isArray(req.body)) {
                throw new HttpException(400, 'Please include the appropriate data');   
            }

            const data = await this.TransactingMemberService.syncUpTransactingMember(req.body);

            res.status(200).json({
                data,
                message: 'upload complete'
            });
        } catch (error) {
          next(error);  
        }
    };

    public syncDownTransactingMemberArray = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { last_sync_time, unique_member_id, transaction_id } = req.query;

            if (!last_sync_time || !unique_member_id || !transaction_id) {
                throw new HttpException (400, 'please include all necessary query parameters');   
            }

            const data = await this.TransactingMemberService.syncDownTransactingMember(req.query.last_sync_time as string, req.query.unique_member_id as string, req.query.transaction_id as string);

            res.status(200).json({
                data,
                message: 'download complete'
            });
        } catch (error) {
            next(error);
        }
    };
};

export default TransactingMemberController;