import { Image, TableProps } from "antd";
import { CustomersType } from "../../../types/customers.type";
import { Link } from "react-router-dom";

export const columns: TableProps<CustomersType>["columns"] = [
    {
        title: "Full Name",
        dataIndex: "full_name",
        key: "full_name",
        render: (full_name: string, record: CustomersType) => (
            <Link to={`/create-debt/${record.id}`}>{full_name}</Link>
        ),
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
        render: (imageUrl: string) => (
            <Image src={imageUrl} width={"70px"} height={"50px"} alt="image" />
        ),
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
