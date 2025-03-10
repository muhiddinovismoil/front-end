import React from "react";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarCard: React.FC = () => {
    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
        width: 500,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <>
            <div style={{ display: "flex", gap: 50 }}>
                <div style={wrapperStyle}>
                    <Calendar
                        fullscreen={false}
                        onPanelChange={onPanelChange}
                    />
                </div>
                <div></div>
            </div>
        </>
    );
};

export default CalendarCard;
