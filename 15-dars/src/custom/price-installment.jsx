/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import { COLORS } from "../config/color";

export const PriceInstallment = ({
    children,
    old_price,
    new_price,
    monthly_price,
    price,
    decor = {},
}) => {
    return (
        <Stack>
            <Typography variant="body2" color={COLORS.opacityColor}>
                {children}
            </Typography>
            <Typography
                variant="h2"
                sx={decor}
                fontWeight={400}
                lineHeight={"145%"}
            >
                {old_price || new_price || monthly_price || price}
            </Typography>
        </Stack>
    );
};
