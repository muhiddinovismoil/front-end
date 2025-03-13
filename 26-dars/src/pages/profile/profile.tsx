import { Form, Button, Flex, Typography, Image, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, EditFilled } from "@ant-design/icons";
import { useGetProfileData } from "./service/query/useGetProfileData";
import profileImg from "../../assets/profile-logo.svg";
const { Title } = Typography;

const Profile = () => {
    const navigate = useNavigate();
    const { data: profileData } = useGetProfileData();
    const navigateBack = () => {
        navigate(-1);
    };
    const navigateToEdit = () => {
        navigate("/profile-edit");
    };
    return (
        <>
            <Flex vertical style={{ maxWidth: "560px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "40px",
                        maxWidth: "500px",
                    }}
                >
                    <Button
                        onClick={navigateBack}
                        style={{ marginTop: "3px" }}
                        type="text"
                    >
                        <ArrowLeftOutlined /> Back
                    </Button>
                    <Title style={{ fontSize: "32px" }}>
                        Shaxsiy ma'lumotlar
                    </Title>
                </div>
                <Flex vertical align="center" style={{ paddingTop: "20px" }}>
                    <Flex
                        align="center"
                        style={{ borderRadius: "100%", overflow: "hidden" }}
                    >
                        <Image
                            width={150}
                            height={145}
                            style={{
                                border: "2px solid #1677ff",
                                padding: "2px",
                                borderRadius: "100%",
                            }}
                            src={profileData?.data?.image || profileImg}
                        />
                    </Flex>
                </Flex>
                <Flex
                    vertical
                    style={{
                        marginTop: "50px",
                        height: "290px",
                    }}
                    justify="space-between"
                >
                    <Form layout="vertical">
                        <Form.Item label="Ismi familiya">
                            <Input
                                value={profileData?.data?.fullname}
                                disabled
                                style={{
                                    paddingTop: "14px",
                                    paddingBottom: "14px",
                                    paddingLeft: "16px",
                                    fontSize: "13px",
                                    color: "black",
                                    fontWeight: 400,
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Telefon raqam">
                            <Input
                                value={profileData?.data?.phone_number}
                                disabled
                                style={{
                                    paddingTop: "14px",
                                    paddingBottom: "14px",
                                    paddingLeft: "16px",
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    color: "black",
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Elektron pochta">
                            <Input
                                value={profileData?.data?.email}
                                disabled
                                type="email"
                                style={{
                                    paddingTop: "14px",
                                    paddingBottom: "14px",
                                    paddingLeft: "16px",
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    color: "black",
                                }}
                            />
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>
            <Button
                onClick={navigateToEdit}
                icon={<EditFilled />}
                type="primary"
                style={{ fontSize: "15px", marginTop: "50px", padding: "20px" }}
                iconPosition="end"
            >
                Edit Profile
            </Button>
        </>
    );
};
export default Profile;
