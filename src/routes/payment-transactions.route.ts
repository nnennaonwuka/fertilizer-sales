/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import PaymentTransactionsController from '../controllers/payment-transactions.controller';

class PaymentTransactionsRoute implements Routes {
    public path = '/payment-transactions';
    public router = Router();
    public PaymentTransactionsController = new PaymentTransactionsController();

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/upload`, this.PaymentTransactionsController.uploadPaymentTransactionsList);
        this.router.get(`${this.path}/download`, this.PaymentTransactionsController.downloadPaymentTransactionsList);
    }
}

export default PaymentTransactionsRoute;
