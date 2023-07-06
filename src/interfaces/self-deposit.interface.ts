/* eslint-disable prettier/prettier */
export enum PAYMENT_STATUS {
    Pending = 'Pending',
    Completed = 'Approved',
    Declined = 'Declined',
  }
  
  export interface self_deposit {
    transaction_id: string;
    date_logged: Date;
    tg_id: string;
    depositor_name: string;
    deposit_date: Date;
    amount: string;
    latitude: string;
    longitude: string;
    bank_name: string;
    bank_lga: string;
    bank_community: string;
    bank_ward: string;
    pos_receipt_id: string;
    payment_status: PAYMENT_STATUS;
    staff_id: string;
    imei: string;
    app_version: string;
    created_at: Date;
    updated_at: Date;
}  