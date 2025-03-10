import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { DebtsCard } from "./components/debts-card";
import { useGetOneDebtorDebts } from "./service/query/useGetOneDebtorDebts";
import { DebtorResponseData } from "../../types/debts.type";
const { Title, Text } = Typography;
export const Debts = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetOneDebtorDebts(id as string);
    const navigateToBackPage = () => {
        navigate("/customers", { replace: true });
    };
    const navigateToAddDebts = () => {
        navigate(`/add-debts/${id}`);
    };
    const totalDebtsSum = data?.debts?.reduce(
        (acc: number, item: { debt_sum?: string }) =>
            acc + (parseFloat(item.debt_sum || "0") || 0),
        0
    );

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                position: "relative",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "40px",
                        maxWidth: "500px",
                    }}
                >
                    <Button
                        onClick={navigateToBackPage}
                        style={{ marginTop: "3px" }}
                        type="text"
                    >
                        <ArrowLeftOutlined /> Back
                    </Button>
                    <Title style={{ fontSize: "32px" }}>
                        {data?.full_name}
                    </Title>
                </div>
                <div
                    style={{
                        maxWidth: "675px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        paddingTop: "28.5px",
                        paddingBottom: "28.5px",
                        paddingLeft: "45px",
                        backgroundColor: "#bbd2fc",
                        borderRadius: "24px",
                    }}
                >
                    <Text style={{ fontSize: "18px" }}>Umumiy nasiya</Text>
                    <Text style={{ fontSize: "18px" }}>
                        <span
                            style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                paddingRight: "12px",
                            }}
                        >
                            {totalDebtsSum}
                        </span>
                        so‘m
                    </Text>
                </div>
            </div>
            <h3
                style={{
                    paddingLeft: "8px",
                    fontSize: "22px",
                    fontWeight: "bold",
                }}
            >
                Faol nasiyalar
            </h3>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    maxWidth: "820px",
                    overflowY: "auto",
                    maxHeight: "510px",
                }}
            >
                {isLoading ? (
                    <p>Loading ....</p>
                ) : (
                    data?.debts?.map((item: DebtorResponseData) => (
                        <DebtsCard
                            key={item.id}
                            id={item.id}
                            date={item.debt_date}
                            next_payment={item.month_sum}
                            total_debt={item.debt_sum}
                        />
                    ))
                )}
            </div>
            <Button
                style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    height: "40px",
                }}
                type="primary"
                onClick={navigateToAddDebts}
            >
                <PlusOutlined />
                Qo‘shish
            </Button>
        </div>
    );
};
