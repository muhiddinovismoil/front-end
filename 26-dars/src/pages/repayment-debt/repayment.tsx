import { Typography, Form, Button, Flex, Modal, Input } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { useGetPayment } from "./service/query/useGetPayment";
import { useRepaymentByMonth } from "./service/mutation/useRepaymentByMonth";
import { RepaymentByMonthI } from "../../types/repayment";
import { useRepaymentAnyAmount } from "./service/mutation/useRepaymentAnyAmount";
const { Title } = Typography;

export const Repayment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isOneMonthModalOpen, setOneMonthModalOpen] = React.useState(false);
    const [isAnyAmountModalOpen, setAnyAmountModalOpen] = React.useState(false);
    const [isMonthSelectionModalOpen, setMonthSelectionModalOpen] =
        React.useState(false);
    const [form] = Form.useForm();
    const { data } = useGetPayment(id);
    const { mutate, isPending } = useRepaymentByMonth();
    const { mutate: mutate2, isPending: isPending2 } = useRepaymentAnyAmount();
    const handleRepaymentByMonth = () => {
        const data: RepaymentByMonthI = {
            type: "one_month",
            debt_id: id as string,
        };
        mutate(data);
        setOneMonthModalOpen(false);
    };
    const handleRepaymentAnyAmount = (values: RepaymentByMonthI) => {
        const data: RepaymentByMonthI = {
            ...values,
            type: "any_payment",
            sum: Number(values.sum),
            debt_id: id as string,
        };
        mutate2(data);
        setAnyAmountModalOpen(false);
        form.resetFields();
    };

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
                        onClick={() => setOneMonthModalOpen(true)}
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
                        open={isOneMonthModalOpen}
                        onCancel={() => setOneMonthModalOpen(false)}
                        centered
                    >
                        <Flex vertical gap={100} style={{ marginTop: "30px" }}>
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
                        onClick={() => setAnyAmountModalOpen(true)}
                        style={{
                            borderBottom: "1px solid",
                            borderRadius: "0",
                            height: "40px",
                            justifyContent: "space-between",
                        }}
                    >
                        Har qanday miqdorda so‘ndirish
                    </Button>
                    <Modal
                        title="Har qanday miqdorda so‘ndirish"
                        footer={null}
                        open={isAnyAmountModalOpen}
                        onCancel={() => setAnyAmountModalOpen(false)}
                        centered
                    >
                        <Form
                            form={form}
                            onFinish={handleRepaymentAnyAmount}
                            layout="vertical"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "40px",
                            }}
                        >
                            <Form.Item
                                label="Miqdor"
                                name="sum"
                                style={{ marginTop: "20px" }}
                                rules={[
                                    {
                                        required: true,
                                        message: "Miqdor kiriting!",
                                    },
                                ]}
                            >
                                <Input placeholder="Miqdorni kiriting" />
                            </Form.Item>
                            <Button
                                style={{ width: "100%" }}
                                type="primary"
                                htmlType="submit"
                                loading={isPending2}
                            >
                                So'ndirish
                            </Button>
                        </Form>
                    </Modal>
                    <Button
                        icon={<ArrowRightOutlined />}
                        iconPosition="end"
                        onClick={() => setMonthSelectionModalOpen(true)}
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
                    <Modal
                        title="To‘lov muddatini tanlang"
                        footer={null}
                        open={isMonthSelectionModalOpen}
                        onCancel={() => setMonthSelectionModalOpen(false)}
                        centered
                    >
                        <Flex
                            align="center"
                            justify="space-between"
                            style={{
                                marginTop: "20px",
                                borderBottom: "1px solid #ececec",
                                paddingBottom: "20px",
                            }}
                        >
                            <Flex vertical gap={4}>
                                <p
                                    style={{
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "171%",
                                    }}
                                >
                                    So‘ndirish:
                                </p>
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        lineHeight: "150%",
                                        color: "#3478f7",
                                    }}
                                >
                                    0 so'm
                                </p>
                            </Flex>
                            <Button
                                type="link"
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    lineHeight: "171%",
                                    color: "#3478f7",
                                }}
                            >
                                Hammasini tanlang
                            </Button>
                        </Flex>
                    </Modal>
                </Flex>
            </Flex>
        </>
    );
};
