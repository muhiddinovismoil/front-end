import {
    Box,
    Container,
    Stack,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { COLORS } from "../../config/color";
import SendMail from "../../assets/footer/send-mail.ico";
import ContactImg from "../../assets/footer/contact-img";
import ContactImg2 from "../../assets/footer/contact-img2";
import ContactSocial from "../../assets/footer/contact-social";
import ContactSocial3 from "../../assets/footer/contact-social3";
import ContactSocial2 from "../../assets/footer/contact-social2";

export const Footer = () => {
    return (
        <Box bgcolor={COLORS.footerColor}>
            <Container maxWidth="xl">
                <Stack
                    direction={"row"}
                    py={"40px"}
                    justifyContent={"space-between"}
                >
                    <Stack flexGrow={1} maxWidth={"185px"} gap={"24px"}>
                        <Typography variant="body1" fontWeight={700}>
                            Каталог товаров
                        </Typography>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"16px"}
                        >
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Ковры
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Коврики
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Дорожки
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Для ванной
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Особенные ковры
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack flexGrow={1} maxWidth={"185px"} gap={"24px"}>
                        <Typography variant="body1" fontWeight={700}>
                            Личный кабинет
                        </Typography>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"16px"}
                        >
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Личный кабинет
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Мои заказы
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Избранное
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack flexGrow={1} maxWidth={"204px"} gap={"24px"}>
                        <Typography variant="body1" fontWeight={700}>
                            Центр поддержки
                        </Typography>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"16px"}
                        >
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Контакты
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Доставка
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={"130%"}
                                color={COLORS.opacityColor}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: `${COLORS.primary}`,
                                    },
                                }}
                            >
                                Возвраты
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack flexGrow={1} maxWidth={"183px"} gap={"24px"}>
                        <Typography variant="body1" fontWeight={700}>
                            Помощь и контакты
                        </Typography>
                        <Stack gap={"16px"}>
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={"8px"}
                            >
                                <Box py={"3px"} px={"2px"}>
                                    <ContactImg />
                                </Box>
                                <Typography
                                    variant="body2"
                                    color={COLORS.primary}
                                    sx={{ cursor: "pointer" }}
                                >
                                    +7 775 657 66 76
                                </Typography>
                            </Stack>
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={"8px"}
                            >
                                <Box py={"3px"} px={"2px"}>
                                    <ContactImg2 />
                                </Box>
                                <Typography
                                    variant="body2"
                                    color={COLORS.primary}
                                    sx={{ cursor: "pointer" }}
                                >
                                    info@kilem.kz
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={"row"} gap={"20px"}>
                            <Box sx={{ cursor: "pointer" }}>
                                <Link to={"https://www.whatsapp.com/"}>
                                    <ContactSocial />
                                </Link>
                            </Box>
                            <Box sx={{ cursor: "pointer" }}>
                                <Link to={"https://www.instagram.com/"}>
                                    <ContactSocial2 />
                                </Link>
                            </Box>
                            <Box sx={{ cursor: "pointer" }}>
                                <Link to={"https://www.facebook.com/"}>
                                    <ContactSocial3 />
                                </Link>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack flexGrow={1} maxWidth={"265px"} gap={"24px"}>
                        <Typography variant="body1" fontWeight={700}>
                            Рассылка
                        </Typography>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"16px"}
                        >
                            <Typography
                                maxWidth={"220px"}
                                variant="body2"
                                color={COLORS.opacityColor}
                            >
                                Подпишитесь, чтобы всегда быть в курсе наших
                                новый акций
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#FFF",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                }}
                            >
                                <TextField
                                    placeholder="Ваш email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        "& fieldset": { border: "none" },
                                        flex: 1,
                                        paddingLeft: "10px",
                                    }}
                                />
                                <Button
                                    sx={{
                                        backgroundColor: "#5E837D",
                                        padding: "21px 13px 21px 15px",
                                        borderTopLeftRadius: "0px",
                                        borderBottomLeftRadius: "0px",
                                        "&:hover": {
                                            backgroundColor: "#4F726C",
                                        },
                                    }}
                                >
                                    <SendMail sx={{ color: "#FFF" }} />
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};
