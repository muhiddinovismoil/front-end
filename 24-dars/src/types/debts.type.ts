export interface DebtsCardI {
    id: string;
    date: string;
    total_debt: string;
    next_payment: string;
}
export interface DebtorResponseData {
    id: string;
    debtor_id: string;
    debt_sum: string;
    month_sum: string;
    debt_period: number;
    debt_date: string;
    created_at: string;
    updated_at: string;
    description: string;
}
export interface DebtorField {
    debtor_id: string;
    debt_sum: string;
    month_sum: string;
    debt_period: number;
    debt_date: string;
    description: string;
}
