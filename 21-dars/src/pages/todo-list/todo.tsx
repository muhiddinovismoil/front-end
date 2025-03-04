import { Form, Input, Button } from "antd";
import { useParams } from "react-router-dom";
import { useAddTodo } from "./service/mutation/useAddTodo";
import { useEditTodo } from "./service/mutation/useEditTodo"; // Import qilindi
import { todoT } from "../../interface/todo-interface";

export const Todo = () => {
    const { id } = useParams();
    const { mutate: addTodo, isPending: isAdding } = useAddTodo();
    const { mutate: editTodo, isPending: isEditing } = useEditTodo(); // Edit todo qo‘shildi
    const [form] = Form.useForm();

    const onFinish = (values: Omit<todoT, "_id">) => {
        if (id) {
            editTodo(
                { _id: id, data: values },
                {
                    onSuccess: () => {
                        form.resetFields();
                    },
                }
            );
        } else {
            addTodo(values, {
                onSuccess: () => {
                    form.resetFields();
                },
            });
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
            <Button
                type="primary"
                htmlType="submit"
                loading={isAdding || isEditing}
            >
                {id ? "Update" : "Submit"}
            </Button>
        </Form>
    );
};
