import React from "react";
import { Table } from "antd";
import { CustomersType } from "../../types/customers.type";
import { useGetAllDebtors } from "./service/query/useGetAllDebtors";
import { columns } from "./components/table-props";

const Customers: React.FC = () => {
    const [currPage, setCurrPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {
        data: justData,
        isLoading,
        error,
    } = useGetAllDebtors(currPage, pageSize);
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
            pagination={{
                current: currPage,
                pageSize: pageSize,
                total: justData?.total || 0,
                onChange: (page, pageSize) => {
                    setCurrPage(page);
                    setPageSize(pageSize);
                },
            }}
        />
    );
};

export default Customers;
