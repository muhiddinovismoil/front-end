import type { FormProps } from "antd";
import { Alert, Button, Form, Input, Typography } from "antd";
const { Title, Paragraph } = Typography;
import logoImg from "../../assets/logo.svg";
import { authUserT } from "../../types/auth.type";
import { useLoginApp } from "./service/mutation/useLoginApp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
    const { mutate, isPending } = useLoginApp();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const onFinish: FormProps<authUserT>["onFinish"] = (values) => {
        mutate(values, {
            onSuccess: () => {
                navigate("/");
            },
            onError: (err: any) => {
                setErrorMsg(err.response.data.error.message);
            },
        });
    };
    return (
        <div className="wrap">
            <div className="form-wrapper">
                <div>
                    <div style={{ marginBottom: "32px" }}>
                        <img src={logoImg} alt="logo" />
                    </div>
                    <div>
                        <Title
                            className="font"
                            style={{ fontSize: "24px", marginBottom: "12px" }}
                        >
                            Dasturga kirish
                        </Title>
                        <Paragraph
                            className="font"
                            style={{
                                fontSize: "16px",
                                fontWeight: "500px",
                                color: "rgba(0,0,0,0.6)",
                                lineHeight: "140%",
                            }}
                        >
                            Iltimos, tizimga kirish uchun login va parolingizni
                            kiriting.
                        </Paragraph>
                    </div>
                </div>
                <Form
                    name="basic"
                    layout="vertical"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<authUserT>
                        name="username"
                        style={{ width: "100%" }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Login"
                            autoComplete="off"
                            style={{
                                paddingTop: "12px",
                                paddingBottom: "12px",
                            }}
                        />
                    </Form.Item>

                    <Form.Item<authUserT>
                        name="password"
                        style={{
                            width: "100%",
                        }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="Parol"
                            autoComplete="off"
                            style={{
                                paddingTop: "12px",
                                paddingBottom: "12px",
                            }}
                        />
                    </Form.Item>
                    {errorMsg && (
                        <Alert
                            message={errorMsg}
                            type="error"
                            showIcon
                            style={{ marginBottom: "12px" }}
                        />
                    )}
                    <Button
                        type="primary"
                        loading={isPending}
                        style={{
                            width: "100%",
                            height: "45px",
                        }}
                        htmlType="submit"
                    >
                        Kirish
                    </Button>
                </Form>
            </div>
        </div>
    );
};
