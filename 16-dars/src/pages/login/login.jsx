import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { request } from "../../config/request";
import { saveState } from "../../config/storage";
export const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values) => {
        request
            .post("/login", values)
            .then((res) => {
                saveState("user", res.data);
                navigate("/app", {
                    replace: true,
                });
            })
            .catch((err) => {
                form.setFields([
                    {
                        name: "email",
                        errors: [err.message],
                    },
                ]);
            });
    };
    return (
        <div className="wrap">
            <div className="form_wrapper">
                <Form
                    form={form}
                    layout="vertical"
                    name="basic"
                    style={{
                        width: 300,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
