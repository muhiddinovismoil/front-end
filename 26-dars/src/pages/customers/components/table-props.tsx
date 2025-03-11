import { Button, Flex, Image, TableProps } from "antd";
import { CustomersType } from "../../../types/customers.type";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type ColumnsProps = {
    onDelete: (id: string) => void;
    onUpdate: (id: string) => void;
    isPending: boolean;
};

export const getColumns = ({
    onDelete,
    isPending,
    onUpdate,
}: ColumnsProps): TableProps<CustomersType>["columns"] => [
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
    {
        title: "Actions",
        key: "actions",
        render: (record) => {
            return (
                <Flex gap={15}>
                    <Button
                        onClick={() => onUpdate(record.id)}
                        icon={<EditOutlined />}
                        type="primary"
                    >
                        EDIT
                    </Button>
                    <Button
                        loading={isPending}
                        icon={<DeleteOutlined />}
                        onClick={() => onDelete(record.id)}
                        danger
                        style={{ backgroundColor: "red", color: "white" }}
                    >
                        DELETE
                    </Button>
                </Flex>
            );
        },
    },
];
