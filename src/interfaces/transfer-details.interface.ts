/* eslint-disable prettier/prettier */
export enum PAYMENT_STATUS {
    Pending = 'Pending',
    Completed = 'Approved',
    Declined = 'Declined',
  }

  export interface transfer_details {
    transaction_id: string;
    date_logged: Date;
    tg_id: string;
    amount: string;
    sender_name: string;
    transfer_date: Date;
    narration: string;
    payment_status: PAYMENT_STATUS;
    staff_id: string;
    imei: string;
    app_version: string;
    created_at: Date;
    updated_at: Date;
  }