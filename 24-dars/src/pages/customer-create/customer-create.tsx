import React, { useState } from "react";
import type { FormProps, UploadProps } from "antd";
import { Button, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CustomerFieldType } from "../../types/customers.type";
import { useAddCustomer } from "./service/mutation/useAddCustomer";
import { request } from "../../config/request";

const CustomerCreate: React.FC = () => {
    const [showNoteInput, setShowNoteInput] = useState(false);
    const [fileList, setFileList] = useState<UploadProps["fileList"]>([]);
    const { mutate, isPending } = useAddCustomer();
    const handleChange: UploadProps["onChange"] = ({ fileList }) => {
        setFileList(fileList);
    };
    const onFinish: FormProps<CustomerFieldType>["onFinish"] = async (
        values
    ) => {
        const customerData: any = { ...values };

        // Agar rasm bo‘lsa, avval uni yuklab olish
        if (fileList && fileList.length > 0) {
            const formData = new FormData();
            formData.append("file", fileList[0].originFileObj);

            // try {
            // const uploadResponse = await request.post("/upload", formData, {
            // headers: { "Content-Type": "multipart/form-data" },
            // });

            // customerData.image_url = uploadResponse.data.url; // Backendga URL jo‘natamiz
            // } catch (error) {
            // console.error("File upload error:", error);
            // }
        }

        console.log("Yuboriladigan ma'lumot:", customerData);
        mutate(customerData); // JSON obyekt yuboramiz
    };

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
                    ]}
                >
                    <Input placeholder="Telefon raqami" />
                </Form.Item>

                <Form.Item<CustomerFieldType>
                    label="Address"
                    name="address"
                    rules={[{ message: "Please input your address!" }]}
                >
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
                    <Form.Item<CustomerFieldType>
                        label="Note"
                        name="note"
                        rules={[{ message: "Please input your note!" }]}
                    >
                        <Input placeholder="Qo'shimcha eslatma yozing" />
                    </Form.Item>
                )}

                <p style={{ marginBottom: 10 }}>Rasm biriktirish</p>
                <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    beforeUpload={() => false}
                    onChange={handleChange}
                    maxCount={2}
                >
                    {fileList && fileList.length >= 2 ? null : (
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
