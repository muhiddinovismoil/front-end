import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { todoT } from "../../../interface/todo-interface";
import { useDeleteTodo } from "../service/mutation/useDeleteTodo";
import { useQueryClient } from "@tanstack/react-query";

export const TodoCard = ({ _id, title, description }: todoT) => {
    const navigate = useNavigate();
    const client = useQueryClient();
    const { mutate, isPending } = useDeleteTodo();

    const deleteItem = () => {
        mutate(_id, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ["todo-list"] });
            },
        });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid",
                borderRadius: "20px",
                borderColor: "rgba(0,0,0,0.1)",
                padding: "20px",
            }}
        >
            <div>
                <h2 style={{ marginBottom: "5px" }}>{title}</h2>
                <p>{description}</p>
            </div>
            <div style={{ display: "flex" }}>
                <Button
                    type="primary"
                    icon={<DeleteOutlined />}
                    style={{
                        marginRight: "10px",
                        backgroundColor: "#fb2c36",
                    }}
                    onClick={deleteItem}
                    loading={isPending}
                >
                    Delete
                </Button>
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    style={{ backgroundColor: "#144bc4" }}
                    onClick={() => navigate(`/edit-todo/${_id}`)}
                >
                    Edit
                </Button>
            </div>
        </div>
    );
};
