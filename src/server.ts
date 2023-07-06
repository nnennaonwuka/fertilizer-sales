import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import TransactingMemberRoute from './routes/transacting-member.routes';
import PaymentTransactionsRoute from './routes/payment-transactions.route';
import SelfDepositRoute from './routes/self-deposit.route';

ValidateEnv();

console.log('App is up');

const app = new App([new TransactingMemberRoute(), new PaymentTransactionsRoute(), new SelfDepositRoute()]);

app.listen();
