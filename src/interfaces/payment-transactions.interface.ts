/* eslint-disable prettier/prettier */
export enum TRANSACTION_STATUS {
    Pending = 'Pending',
    Completed = 'Completed',
  }
  
  export interface Payment_Transactions {
    transaction_id: string;
    receipt_id: string;
    tg_id: string;
    amount: string;
    payment_method: string;
    payer_id: string;
    receiver_id: string;
    comment: string;
    member_verified_flag: number;
    npk_bags: string;
    urea_bags: string;
    cash_deposit_flag: number;
    scan_date: Date;
    transaction_status: TRANSACTION_STATUS; // Updated to use enum
    date: Date;
    staff_id: string;
    imei: string;
    app_version: string;
    created_at: Date;
    updated_at: Date;
  }