export interface RepaymentByMonthI {
    debt_id: string;
    type: "one_month" | "multi_month" | "any_payment";
}
