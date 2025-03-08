import React, { useState } from "react";
import type { FormProps, UploadProps } from "antd";
import { Button, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CustomerFieldType } from "../../types/customers.type";
import { useAddCustomer } from "./service/mutation/useAddCustomer";
import { useAddImageCustomer } from "./service/mutation/useAddImageCustomer";

const CustomerCreate: React.FC = () => {
    const [showNoteInput, setShowNoteInput] = useState(false);
    const { mutate, isPending } = useAddCustomer();
    const { mutate: mutate2 } = useAddImageCustomer();
    const [fileList, setFileList] = useState<any[]>([]);
    const [newFile, setNewFile] = useState<File | null>(null);
    const [imgUrl, setImgUrl] = useState("");

    const handleChange: UploadProps["onChange"] = ({ fileList }) => {
        setFileList(fileList);
        const lastFile = fileList[fileList.length - 1];
        if (lastFile?.originFileObj) {
            setNewFile(lastFile.originFileObj);
        }
    };
    React.useEffect(() => {
        if (newFile) {
            mutate2(newFile, {
                onSuccess: (res) => {
                    setImgUrl(res.data.image_url);
                },
            });
        }
    }, [newFile]);

    const onFinish: FormProps<CustomerFieldType>["onFinish"] = (values) =>
        mutate({ ...values, image: imgUrl });
    return (
        <>
            <h2 style={{ marginBottom: "40px", fontSize: "28px" }}>
                Mijoz qo'shish
            </h2>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout="vertical"
                autoComplete="off"
            >
                <Form.Item<CustomerFieldType>
                    label="Name"
                    name="full_name"
                    rules={[
                        { required: true, message: "Please input your name!" },
                    ]}
                >
                    <Input placeholder="Ismini kiriting" />
                </Form.Item>

                <Form.Item<CustomerFieldType>
                    label="Phone number"
                    name="phone_number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone number!",
                        },
                        {
                            pattern: /^\+998\d{9}$/,
                            message: "Please enter a valid Uzbek phone number!",
                        },
                    ]}
                >
                    <Input placeholder="Telefon raqami" />
                </Form.Item>

                <Form.Item<CustomerFieldType> label="Address" name="address">
                    <Input placeholder="Yashash manzilini kiriting" />
                </Form.Item>

                <div style={{ width: "400px" }}>
                    <Button
                        type="default"
                        onClick={() => setShowNoteInput(!showNoteInput)}
                        style={{ marginBottom: 30, width: "100%" }}
                    >
                        {showNoteInput
                            ? "Eslatma-ni Yopish"
                            : "Eslatma Qo'shish"}
                    </Button>
                </div>

                {showNoteInput && (
                    <Form.Item<CustomerFieldType> label="Note" name="note">
                        <Input placeholder="Qo'shimcha eslatma yozing" />
                    </Form.Item>
                )}

                <p style={{ marginBottom: 10 }}>Rasm biriktirish</p>
                <Upload
                    listType="picture-card"
                    onChange={handleChange}
                    maxCount={2}
                >
                    {fileList.length < 2 && (
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    )}
                </Upload>

                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isPending}
                    style={{ marginTop: 20, width: "400px" }}
                >
                    Saqlash
                </Button>
            </Form>
        </>
    );
};

export default CustomerCreate;
