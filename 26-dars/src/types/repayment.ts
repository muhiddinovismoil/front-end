export interface RepaymentByMonthI {
    debt_id?: string;
    sum?: number;
    type?: "one_month" | "multi_month" | "any_payment";
}
