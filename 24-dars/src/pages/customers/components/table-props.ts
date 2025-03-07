import { TableProps } from "antd";
import { CustomersType } from "../../../types/customers.type";

export const columns: TableProps<CustomersType>["columns"] = [
    {
        title: "Full Name",
        dataIndex: "full_name",
        key: "full_name",
    },
    {
        title: "Phone number",
        dataIndex: "phone_number",
        key: "phone_number",
    },
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Is Active",
        dataIndex: "is_active",
        key: "is_active",
        render: (isActive: boolean) => (isActive ? "✅ Active" : "❌ Inactive"),
    },
];
