import { Button, Table } from "antd";
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import axios from "axios";
import Modal from "antd/es/modal/Modal";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../../App";

export const Home = () => {
    const [todos, setTodos] = React.useState([]);
    const messageApi = React.useContext(MessageContext);
    const [selectedTodo, setSelectedTodo] = React.useState(null);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const navigate = useNavigate();
    const fetchData = () => {
        axios
            .get(`${import.meta.env.VITE_URI}/todos`)
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error("Error fetching todos:", error);
            });
    };
    React.useEffect(fetchData, []);
    const showDeleteConfirm = (todo) => {
        setSelectedTodo(todo);
        setIsModalVisible(true);
    };
    const handleDelete = () => {
        if (selectedTodo) {
            axios
                .delete(`${import.meta.env.VITE_URI}/todos/${selectedTodo.id}`)
                .then(() => {
                    setTodos((prev) =>
                        prev.filter((item) => item.id !== selectedTodo.id)
                    );
                    messageApi.success("Todo Task Successfully Deleted");
                })
                .catch((error) => console.error("Error deleting todo:", error));
        }
        setIsModalVisible(false);
    };
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Action",
            render: (data) => {
                return (
                    <div>
                        <Button
                            type="primary"
                            icon={<DeleteOutlined />}
                            style={{
                                marginRight: "10px",
                                backgroundColor: "#fb2c36",
                            }}
                            onClick={() => showDeleteConfirm(data)}
                        >
                            Delete
                        </Button>
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            style={{ backgroundColor: "#144bc4" }}
                            onClick={() => navigate(`/edit-todo/${data.id}`)}
                        >
                            Edit
                        </Button>
                    </div>
                );
            },
        },
    ];
    const dataSource = todos.map((item) => ({
        key: item.id,
        id: item.id,
        title: item.title,
        description: item.description,
    }));
    return (
        <>
            <Table dataSource={dataSource} columns={columns} />
            <Modal
                title="Confirm Deletion"
                open={isModalVisible}
                onOk={handleDelete}
                onCancel={() => setIsModalVisible(false)}
                okText="Delete"
                cancelText="Cancel"
                okButtonProps={{ danger: true }}
                icon={<ExclamationCircleOutlined />}
            >
                <p>Are you sure you want to delete {selectedTodo?.title}?</p>
            </Modal>
        </>
    );
};
