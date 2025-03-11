import { Typography, Button, Flex, Modal } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { useGetPayment } from "./service/query/useGetPayment";
import { useRepaymentByMonth } from "./service/mutation/useRepaymentByMonth";
import { RepaymentByMonthI } from "../../types/repayment";
const { Title } = Typography;

export const Repayment = () => {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const { data, isLoading } = useGetPayment(id);
    const { mutate, isPending } = useRepaymentByMonth();
    const handleRepaymentByMonth = () => {
        const data: RepaymentByMonthI = {
            type: "one_month",
            debt_id: id as string,
        };
        mutate(data);
        setIsModalOpen(false);
    };
    const handelOpenModal = () => {
        setIsModalOpen(true);
    };
    const handelCloseModal = () => {
        setIsModalOpen(false);
    };
    const navigate = useNavigate();
    return (
        <>
            <Flex vertical style={{ maxWidth: "500px", gap: "80px" }}>
                <Flex>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "start",
                            gap: "40px",
                            maxWidth: "500px",
                        }}
                    >
                        <Button
                            onClick={() => navigate(-1)}
                            style={{ marginTop: "3px" }}
                            type="text"
                        >
                            <ArrowLeftOutlined /> Back
                        </Button>
                        <Title style={{ fontSize: "32px" }}>
                            Nasiyani so‘ndirish
                        </Title>
                    </div>
                </Flex>
                <Flex vertical>
                    <Button
                        icon={<ArrowRightOutlined />}
                        iconPosition="end"
                        type="text"
                        onClick={handelOpenModal}
                        style={{
                            borderBottom: "1px solid",
                            borderRadius: "0",
                            height: "40px",
                            justifyContent: "space-between",
                        }}
                    >
                        1 oyga so‘ndirish
                    </Button>
                    <Modal
                        title="1 oy uchun so‘ndirish"
                        footer={null}
                        open={isModalOpen}
                        loading={isLoading}
                        onCancel={handelCloseModal}
                        centered
                    >
                        <Flex
                            vertical
                            gap={100}
                            style={{
                                marginTop: "30px",
                            }}
                        >
                            <Flex
                                vertical
                                style={{
                                    width: "475px",
                                    height: "90px",
                                    backgroundColor: "#dde9fe",
                                    borderRadius: "16px",
                                    padding: "20px",
                                    gap: "5px",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#3478f7",
                                        fontSize: "18px",
                                    }}
                                >
                                    {data?.nextMonths} so'm
                                </p>
                                <p>{Date()}</p>
                            </Flex>
                            <Button
                                type="primary"
                                loading={isPending}
                                style={{ width: "475px" }}
                                onClick={handleRepaymentByMonth}
                            >
                                1 oyga so‘ndirish
                            </Button>
                        </Flex>
                    </Modal>
                    <Button
                        icon={<ArrowRightOutlined />}
                        iconPosition="end"
                        type="text"
                        style={{
                            borderBottom: "1px solid",
                            borderRadius: "0",
                            height: "40px",
                            justifyContent: "space-between",
                        }}
                    >
                        Har qanday miqdorda so‘ndirish
                    </Button>
                    <Button
                        icon={<ArrowRightOutlined />}
                        iconPosition="end"
                        type="text"
                        style={{
                            borderBottom: "1px solid",
                            borderRadius: "0",
                            height: "40px",
                            justifyContent: "space-between",
                        }}
                    >
                        To‘lov muddatini tanlash
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};
