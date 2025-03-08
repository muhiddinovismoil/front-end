// import React from "react";
import {
    Typography,
    TimePicker,
    TimePickerProps,
    Button,
    Flex,
    Select,
    DatePicker,
    DatePickerProps,
} from "antd";
import { ArrowLeftOutlined, CalendarTwoTone } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
const { Title } = Typography;

export const AddDebts = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    dayjs.extend(customParseFormat);
    const onChangeTime: TimePickerProps["onChange"] = (time, timeString) => {
        console.log(time, timeString);
    };
    const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(date, dateString);
    };
    const navigateToBackPage = () => {
        navigate(`/create-debt/${id}`);
    };
    const handleChange = (value: string | string[]) => {
        console.log(`selected ${value}`);
    };
    return (
        <Flex style={{ flexDirection: "column", gap: "16px" }}>
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
                        onClick={navigateToBackPage}
                        style={{ marginTop: "3px" }}
                        type="text"
                    >
                        <ArrowLeftOutlined /> Back
                    </Button>
                    <Title style={{ fontSize: "32px" }}>Batafsil</Title>
                </div>
            </Flex>
            <Flex
                style={{
                    border: "1px solid",
                    maxWidth: 500,
                    flexDirection: "column",
                    gap: "28px",
                }}
            >
                <Flex
                    style={{
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <p
                            style={{
                                paddingBottom: "8px",
                                fontWeight: "bold",
                                fontSize: "16px",
                            }}
                        >
                            Sana
                        </p>
                        <DatePicker
                            style={{
                                width: "340px",
                                height: "44px",
                                backgroundColor: "#f6f6f6",
                            }}
                            suffixIcon={<CalendarTwoTone />}
                            placeholder="Sanani tanlang"
                            format={{
                                format: "YYYY-MM-DD",
                                type: "mask",
                            }}
                            onChange={onChangeDate}
                        />
                    </div>
                    <div>
                        <p
                            style={{
                                paddingBottom: "8px",
                                fontWeight: "bold",
                                fontSize: "16px",
                            }}
                        >
                            Vaqt
                        </p>
                        <TimePicker
                            suffixIcon={false}
                            style={{
                                height: "44px",
                                backgroundColor: "#f6f6f6",
                            }}
                            placeholder="Vaqtni tanlang"
                            onChange={onChangeTime}
                            className="ant-picker-input"
                            defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                    </div>
                </Flex>
                <Flex style={{ flexDirection: "column" }}>
                    <p
                        style={{
                            paddingBottom: "8px",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                    >
                        Muddat
                    </p>
                    <Select
                        className="custom-select"
                        suffixIcon={false}
                        placeholder="Muddatni tanlang"
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            height: "44px",
                        }}
                        options={[
                            { value: 1, label: "1 oy" },
                            { value: 2, label: "2 oy" },
                            { value: 3, label: "3 oy" },
                            { value: 6, label: "6 oy" },
                            { value: 9, label: "9 oy" },
                            { value: 12, label: "12 oy" },
                        ]}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
