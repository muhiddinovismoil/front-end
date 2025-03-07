import React from "react";
import { Table } from "antd";
import { CustomersType } from "../../types/customers.type";
import { useGetAllDebtors } from "./service/query/useGetAllDebtors";
import { columns } from "./components/table-props";

const Customers: React.FC = () => {
    const { data: justData, isLoading, error } = useGetAllDebtors();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;
    return (
        <Table<CustomersType>
            columns={columns}
            dataSource={
                justData?.data?.map((item: CustomersType) => ({
                    ...item,
                    key: item.id,
                })) || []
            }
        />
    );
};

export default Customers;
