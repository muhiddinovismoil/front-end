import React, { useEffect, useState } from "react";
import { Button, Form, Input, Popconfirm } from "antd";
import axios from "axios";
import { MessageContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

const Todos = () => {
    const [form] = Form.useForm();
    const messageApi = React.useContext(MessageContext);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios
                .get(`${import.meta.env.VITE_URI}/todos/${id}`)
                .then((res) => {
                    form.setFieldsValue(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching todo:", error);
                });
        } else {
            form.resetFields();
        }
    }, [id]);

    const addData = async (values) => {
        setIsLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_URI}/todos`, values);
            messageApi.success("Yangi ma'lumot qo'shildi!");
            form.resetFields();
        } catch (error) {
            console.error("Error adding todo:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateData = async (values) => {
        setIsLoading(true);
        try {
            await axios.put(`${import.meta.env.VITE_URI}/todos/${id}`, values);
            messageApi.success("O'zgarishlar saqlandi!");
            navigate("/");
        } catch (error) {
            console.error("Error updating todo:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const onFinish = (values) => {
        if (id) {
            updateData(values);
        } else {
            addData(values);
        }
    };

    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            style={{ maxWidth: 600 }}
            initialValues={{ title: "", description: "" }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: "Please input your todo title!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Please input your todo description!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            {id ? (
                <Popconfirm
                    title="O'zgarishlarni tasdiqlaysizmi?"
                    onConfirm={form.submit}
                    okText="Ha"
                    cancelText="Yo‘q"
                >
                    <Button type="primary" loading={isLoading}>
                        Update
                    </Button>
                </Popconfirm>
            ) : (
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            )}
        </Form>
    );
};

export default Todos;
