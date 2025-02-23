/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { COLORS } from "../config/color";
const CustomButton = styled(Button)`
    background-color: ${COLORS.danger};
    font-weight: 700;
    font-size: 18px;
    line-height: 140%;
    color: #fff;
    &:hover {
        background-color: #aa3737;
    }
`;

export const SecondaryButton = ({ children, ...props }) => {
    return (
        <CustomButton disableRipple {...props}>
            {children}
        </CustomButton>
    );
};
