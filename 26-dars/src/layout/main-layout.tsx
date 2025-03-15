import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { loadCookieState } from "../config/cookie";
import profileImg from "../assets/profile-logo.svg";
import { useGetProfileData } from "../pages/profile/service/query/useGetProfileData";
// All bugs were solved
const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const { data: profileData } = useGetProfileData();
    React.useEffect(() => {
        const user = loadCookieState("user_token");
        if (!user) {
            navigate("/login", { replace: true });
        }
    }, []);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigateToProfile = () => {
        navigate("/profile");
    };
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: <Link to={"/"}>Bosh Sahifa</Link>,
                        },
                        {
                            key: "2",
                            icon: <TeamOutlined />,
                            label: <Link to={"/customers"}>Mijozlar</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Flex align="center" gap={20}>
                        <p style={{ color: "black", fontWeight: 600 }}>
                            {profileData?.data?.fullname}
                        </p>
                        <img
                            onClick={navigateToProfile}
                            style={{
                                border: "1px solid #1677ff",
                                marginRight: "15px",
                                padding: "3px",
                                width: "50px",
                                height: "50px",
                                cursor: "pointer",
                                borderRadius: "100%",
                            }}
                            src={profileData?.data?.image || profileImg}
                            alt="profile logo"
                        />
                    </Flex>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
