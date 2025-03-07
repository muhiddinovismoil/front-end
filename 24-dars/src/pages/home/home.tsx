import { Button } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import calendarIco from "../../assets/calendar.svg";
import wallerImg from "../../assets/wallet.svg";
import { useState } from "react";
import { useMainStatistics } from "./service/query/getMainStatistics";
import { useLatePaymentStatistics } from "./service/query/getLatePaymentStatistics";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [isVisible, setVisible] = useState(true);
    const {
        data: data1,
        isLoading: isLoadingMain,
        error: errorMain,
    } = useMainStatistics();
    const {
        data: data2,
        isLoading: isLoadingLate,
        error: errorLate,
    } = useLatePaymentStatistics();
    const navigate = useNavigate();

    if (isLoadingMain || isLoadingLate) {
        return <p>Yuklanmoqda...</p>;
    }

    if (errorMain || errorLate) {
        return <p>API ma'lumotlarni olishda xatolik yuz berdi</p>;
    }

    if (!data1 || !data2) {
        return <p>Ma'lumot topilmadi</p>;
    }

    const mainData = data1?.data || {};
    const lateDebts = data2?.lateDebts || 0;
    const navigateToCreate = () => {
        navigate("/create-debtor");
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "70%",
                }}
            >
                <div
                    style={{
                        maxWidth: "42px",
                        cursor: "pointer",
                        backgroundColor: "#f5f5f5",
                        padding: "11px",
                        borderRadius: "12px",
                        border: "1px solid #ededed",
                        marginBottom: "70px",
                    }}
                >
                    <img src={calendarIco} alt="calendar ico" />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "920px",
                        gap: "40px",
                    }}
                >
                    <div style={{ display: "flex", flexGrow: 1, gap: "20px" }}>
                        <div
                            style={{
                                backgroundColor: "#30af49",
                                maxWidth: "740px",
                                display: "flex",
                                flexDirection: "column",
                                paddingTop: "50px",
                                paddingBottom: "50px",
                                textAlign: "center",
                                flexGrow: 1,
                                borderRadius: "24px",
                                position: "relative",
                                gap: "5px",
                            }}
                        >
                            <h2 style={{ color: "white", fontSize: "28px" }}>
                                {isVisible
                                    ? `${mainData.total_debts || 0}`
                                    : "***************"}{" "}
                                so‘m
                            </h2>
                            <p style={{ color: "#bae1c2", fontSize: "22px" }}>
                                Umumiy nasiya:
                            </p>
                            <div
                                style={{
                                    position: "absolute",
                                    right: "40px",
                                    top: "43%",
                                    cursor: "pointer",
                                }}
                                onClick={() => setVisible(!isVisible)}
                            >
                                {isVisible ? (
                                    <EyeOutlined
                                        style={{
                                            fontSize: "20px",
                                            color: "white",
                                        }}
                                    />
                                ) : (
                                    <EyeInvisibleOutlined
                                        style={{
                                            fontSize: "20px",
                                            color: "white",
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                border: "1px solid #ececec",
                                borderRadius: "24px",
                                padding: "20px",
                                display: "flex",
                                maxWidth: "200px",
                                flexDirection: "column",
                                gap: "55px",
                            }}
                        >
                            <h2>Kechiktirilgan to‘lovlar</h2>
                            <p style={{ color: "#f94d4d", fontSize: "17px" }}>
                                {lateDebts}
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexGrow: 1, gap: "20px" }}>
                        <div
                            style={{
                                maxWidth: "700px",
                                display: "flex",
                                flexDirection: "column",
                                paddingLeft: "40px",
                                paddingTop: "50px",
                                paddingBottom: "30px",
                                flexGrow: 1,
                                borderRadius: "24px",
                                position: "relative",
                                gap: "5px",
                            }}
                        >
                            <h2 style={{ fontSize: "28px" }}>Hamyoningiz</h2>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingTop: "20px",
                                    gap: "40px",
                                }}
                            >
                                <img
                                    style={{
                                        padding: "12px",
                                        backgroundColor: "#f1effc",
                                        borderRadius: "100%",
                                    }}
                                    src={wallerImg}
                                    alt=""
                                />
                                <h2>Hisobingizda</h2>
                                <p style={{ fontSize: "18px" }}>
                                    {mainData.wallet} so‘m
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                border: "1px solid #ececec",
                                borderRadius: "24px",
                                padding: "25px",
                                paddingRight: "45px",
                                display: "flex",
                                maxWidth: "220px",
                                flexDirection: "column",
                                gap: "55px",
                            }}
                        >
                            <h2>Mijozlar soni</h2>
                            <p style={{ color: "#30af49", fontSize: "17px" }}>
                                {mainData.debtors_count || 0}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "end", paddingTop: "190px" }}>
                <Button
                    onClick={navigateToCreate}
                    type="primary"
                    style={{
                        fontSize: "24px",
                        borderRadius: "100%",
                        height: "40px",
                    }}
                >
                    +
                </Button>
            </div>
        </>
    );
};

export default Home;
