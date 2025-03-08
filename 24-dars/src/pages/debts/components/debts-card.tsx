import { Flex, Progress } from "antd";
import { DebtsCardI } from "../../../types/debts.type";
import { useNavigate } from "react-router-dom";

export const DebtsCard = ({
    id,
    date,
    total_debt,
    next_payment,
}: DebtsCardI) => {
    const navigate = useNavigate();
    const navigateToRepayment = () => {
        navigate(`/debt-repayment/${id}`);
    };
    return (
        <div
            onClick={navigateToRepayment}
            style={{
                backgroundColor: "#f6f6f6",
                borderRadius: "16px",
                paddingTop: "25px",
                paddingBottom: "25px",
                paddingRight: "45px",
                paddingLeft: "45px",
                cursor: "pointer",
            }}
        >
            <Flex style={{ flexDirection: "column", gap: "20px" }}>
                <Flex justify="space-between">
                    <p style={{ fontSize: "18px", fontWeight: 500 }}>{date}</p>
                    <p
                        style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#3478f7",
                        }}
                    >
                        {total_debt} so‘m
                    </p>
                </Flex>
                <Flex style={{ flexDirection: "column", gap: "18px" }}>
                    <div>
                        <p style={{ fontSize: "16px", fontWeight: 400 }}>
                            Keyingi to‘lov: 07.11.2024
                        </p>
                        <p
                            style={{
                                paddingTop: "5px",
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "#735cd8",
                            }}
                        >
                            {next_payment} <span>so‘m</span>
                        </p>
                    </div>
                    <Progress percent={80} showInfo={false} size={[728, 13]} />
                </Flex>
            </Flex>
        </div>
    );
};
