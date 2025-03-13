import React, { useState } from "react";
import { ArrowLeftOutlined, PlusOutlined, SaveFilled } from "@ant-design/icons";
import { Button, Flex, Form, Image, Input, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { useGetProfileData } from "./service/query/useGetProfileData";
import { useUpdateProfile } from "./service/mutation/useUpdateProfile";
import { useUploadProfile } from "./service/mutation/useUploadProfileImage";
import { useNavigate } from "react-router-dom";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const ProfileEdit: React.FC = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const { data: profileData } = useGetProfileData();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [form] = Form.useForm();
    const { mutate: mutation } = useUpdateProfile();
    const { mutate: mutation2 } = useUploadProfile();

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };
    const navigate = useNavigate();
    const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );
    const onFinish = (values: any) => {
        const formData = new FormData();
        formData.append("fullname", values.fullname);
        formData.append("phone_number", values.phone_number);
        formData.append("email", values.email);
        mutation({ ...values });
        if (fileList.length > 0) {
            formData.append("file", fileList[0].originFileObj as File);
        }
        mutation2(formData);
    };

    return (
        <>
            <Button
                icon={<ArrowLeftOutlined />}
                type="text"
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
            <Flex
                vertical
                style={{
                    maxWidth: "460px",
                    gap: "30px",
                }}
                align="center"
            >
                <Flex>
                    <Upload
                        listType="picture-circle"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        beforeUpload={() => false}
                        maxCount={1}
                    >
                        {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    {previewImage && (
                        <Image
                            wrapperStyle={{ display: "none" }}
                            preview={{
                                visible: previewOpen,
                                onVisibleChange: (visible) =>
                                    setPreviewOpen(visible),
                                afterOpenChange: (visible) =>
                                    !visible && setPreviewImage(""),
                            }}
                            src={previewImage}
                        />
                    )}
                </Flex>
                <Flex style={{ width: "100%" }}>
                    <Form
                        form={form}
                        initialValues={{
                            fullname: profileData?.data?.fullname,
                            phone_number: profileData?.data?.phone_number,
                            email: profileData?.data?.email,
                        }}
                        layout="vertical"
                        style={{ width: "100%" }}
                        onFinish={onFinish}
                    >
                        <Form.Item label="Ismi familiya" name="fullname">
                            <Input placeholder="Ismi familiya" />
                        </Form.Item>

                        <Form.Item label="Telefon raqam" name="phone_number">
                            <Input placeholder="Telefon raqam" />
                        </Form.Item>

                        <Form.Item label="Elektron pochta" name="email">
                            <Input placeholder="Elektron pochta" type="email" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{
                                    width: "100%",
                                    paddingTop: "20px",
                                    paddingBottom: "20px",
                                }}
                                type="primary"
                                icon={<SaveFilled />}
                                htmlType="submit"
                            >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>
        </>
    );
};

export default ProfileEdit;
