import React from "react";
import { Table } from "antd";
import { CustomersType } from "../../types/customers.type";
import { useGetAllDebtors } from "./service/query/useGetAllDebtors";
import { getColumns } from "./components/table-props";
import { useDeleteCustomer } from "./service/mutation/useDeleteCustomer";
import { useNavigate } from "react-router-dom";

const Customers: React.FC = () => {
    const navigate = useNavigate();
    const [currPage, setCurrPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {
        data: justData,
        isLoading,
        error,
    } = useGetAllDebtors(currPage, pageSize);
    const { mutate, isPending } = useDeleteCustomer();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;
    const onDeleteBtn = (id: string) => {
        mutate(id);
    };
    const onUpdate = (id: string) => {
        navigate(`/edit-debtor/${id}`);
    };
    return (
        <Table<CustomersType>
            columns={getColumns({
                onDelete: onDeleteBtn,
                isPending: isPending,
                onUpdate: onUpdate,
            })}
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
