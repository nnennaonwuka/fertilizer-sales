/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import SelfDepositController from '../controllers/self-deposit.controller';

class SelfDepositRoute implements Routes {
    public path = '/self-deposit';
    public router = Router();
    public SelfDepositController = new SelfDepositController();

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/upload`, this.SelfDepositController.uploadSelfDepositList);
        this.router.get(`${this.path}/download`, this.SelfDepositController.downloadSelfDepositList)
    }
}

export default SelfDepositRoute;