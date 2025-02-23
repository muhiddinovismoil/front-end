import { createTheme } from "@mui/material";
import { COLORS } from "./color.js";
export const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary,
        },
        error: {
            main: COLORS.danger,
        },
    },
    typography: {
        fontFamily: ["Ubuntu", "serif"].join(","),
        h1: {
            fontWeight: 700,
            lineHeight: "130%",
            fontSize: "60px",
            color: COLORS.ligthColor,
        },
        h2: {
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "130%",
        },
        body1: {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            color: COLORS.titleColor,
        },
        body2: {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            color: COLORS.titleColor,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    padding: "13px 38px",
                    borderRadius: "10px",
                },
            },
            variants: [
                {
                    props: { variant: "contained" },
                },
            ],
        },
    },
});
