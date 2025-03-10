import { useState } from "react";
import {
    Typography,
    TimePicker,
    Button,
    Flex,
    Select,
    DatePicker,
    Input,
    Upload,
} from "antd";
import {
    ArrowLeftOutlined,
    CalendarTwoTone,
    PlusOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useAddDebt } from "./service/mutation/useAddDebt";

const { Title } = Typography;

export const AddDebts = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { mutate, isPending } = useAddDebt();
    dayjs.extend(customParseFormat);
    const initialState = {
        dateTime: null as Dayjs | null,
        amount: "",
        duration: null as number | null,
        note: "",
        files: [] as any[],
    };
    const [formData, setFormData] = useState(initialState);
    const handleDateChange = (date: Dayjs | null) => {
        setFormData((prev) => ({
            ...prev,
            dateTime: date
                ? date
                      .hour(prev.dateTime?.hour() || 0)
                      .minute(prev.dateTime?.minute() || 0)
                : null,
        }));
    };
    const handleTimeChange = (time: Dayjs | null) => {
        setFormData((prev) => ({
            ...prev,
            dateTime: prev.dateTime
                ? prev.dateTime
                      .hour(time?.hour() || 0)
                      .minute(time?.minute() || 0)
                : time,
        }));
    };
    const handleChange = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };
    const handleImgChange = ({ fileList }: any) => {
        setFormData((prev) => ({ ...prev, files: fileList }));
    };
    const onSubmit = () => {
        console.log("Collected Data:", {
            dateTime: formData.dateTime?.format("YYYY-MM-DD HH:mm:ss"),
            amount: formData.amount,
            duration: formData.duration,
            note: formData.note,
            files: formData.files.map((file) => file.name),
        });
        mutate({
            debt_date: formData.dateTime
                ? formData.dateTime.format("YYYY-MM-DD HH:mm:ss")
                : "",
            debt_period: formData.duration ?? 0,
            description: formData.note ?? "",
            debtor_id: id ?? "",
            debt_sum: Number(formData.amount) ?? 0,
            // month_sum: formData.duration
            //     ? (formData.amount ?? 0 / formData.duration).toString()
            //     : "0",
        });

        setFormData(initialState);
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
                        onClick={() => navigate(`/create-debt/${id}`)}
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
                            format="YYYY-MM-DD"
                            onChange={handleDateChange}
                            value={formData.dateTime}
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
                            onChange={handleTimeChange}
                            value={formData.dateTime}
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
                        placeholder="Muddatni tanlang"
                        onChange={(value) => handleChange("duration", value)}
                        value={formData.duration}
                        style={{ width: "100%", height: "44px" }}
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

                <Flex vertical>
                    <p
                        style={{
                            paddingBottom: "8px",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                    >
                        Summa miqdori
                    </p>
                    <Input
                        size="large"
                        style={{ height: "44px", backgroundColor: "#f6f6f6" }}
                        placeholder="Mablag'ni kiriting ..."
                        suffix={<p style={{ fontWeight: "bold" }}>so'm</p>}
                        onChange={(e) => handleChange("amount", e.target.value)}
                        value={formData.amount}
                    />
                </Flex>

                <Flex vertical>
                    <p
                        style={{
                            paddingBottom: "8px",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                    >
                        Eslatma
                    </p>
                    <Input.TextArea
                        style={{ height: "104px", backgroundColor: "#f6f6f6" }}
                        onChange={(e) => handleChange("note", e.target.value)}
                        value={formData.note}
                    />
                </Flex>

                <Flex vertical>
                    <p
                        style={{
                            paddingBottom: "8px",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                    >
                        Rasm biriktirish
                    </p>
                    <Upload
                        listType="picture-card"
                        onChange={handleImgChange}
                        maxCount={2}
                        fileList={formData.files}
                    >
                        {formData.files.length < 2 && (
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        )}
                    </Upload>
                </Flex>

                <Button
                    style={{
                        height: "49px",
                        marginTop: "5px",
                        fontSize: "18px",
                    }}
                    type="primary"
                    onClick={onSubmit}
                    loading={isPending}
                >
                    Nasiyani so‘ndirish
                </Button>
            </Flex>
        </Flex>
    );
};
