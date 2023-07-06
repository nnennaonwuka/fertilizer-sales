/* eslint-disable prettier/prettier */
import { Router } from 'express';
import TransactingMemberController from '../controllers/transacting-member.controller';
import { Routes } from '../interfaces/routes.interface';

class TransactingMemberRoute implements Routes {
    public path = '/transacting-members'
    public router = Router()
    public TransactingMemberController = new TransactingMemberController();

    constructor() {
        this.initializeRoutes() 
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/upload`, this.TransactingMemberController.syncUpTransactingMemberArray);
        this.router.get(`${this.path}/download`, this.TransactingMemberController.syncDownTransactingMemberArray);
    }
};

export default TransactingMemberRoute;
