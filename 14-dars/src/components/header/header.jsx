import {
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Link,
    Stack,
    TextField,
} from "@mui/material";
import logoSvg from "../../assets/header/logo.svg";
import Search from "../../assets/header/search";
import LocationIcon from "../../assets/header/location-icon";
import HeaderBadge from "../../assets/header/header-badge";
import HeaderBadge2 from "../../assets/header/header-badge2";
import HeaderIconbtn from "../../assets/header/header-iconbtn";
export const Header = () => {
    return (
        <>
            <Container sx={{ pb: "31px" }}>
                <Stack direction={"row"} gap={"60px"}>
                    <IconButton disableRipple={true}>
                        <Box display={"flex"}>
                            <img src={logoSvg} alt="" />
                        </Box>
                    </IconButton>
                    <Button
                        startIcon={<LocationIcon />}
                        disableRipple
                        sx={{
                            color: "black",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        Алматы
                    </Button>
                    <Box position={"relative"}>
                        <TextField
                            id="search-bar"
                            label="Поиск по товарам"
                            sx={{ width: 601 }}
                            variant="standard"
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                right: 10,
                                top: "50%",
                                transform: "translateY(-55%)",
                                cursor: "pointer",
                                opacity: 0.5,
                            }}
                        >
                            <Search />
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center" gap="48px">
                        <IconButton disableRipple>
                            <HeaderIconbtn />
                        </IconButton>
                        <IconButton disableRipple>
                            <Badge badgeContent={5} color="error">
                                <HeaderBadge />
                            </Badge>
                        </IconButton>
                        <IconButton disableRipple>
                            <Badge badgeContent={2} color="error">
                                <HeaderBadge2 />
                            </Badge>
                        </IconButton>
                    </Box>
                </Stack>
            </Container>
            <div style={{ backgroundColor: "#f9f9f9" }}>
                <Container>
                    <Stack
                        paddingY={"30px"}
                        direction={"row"}
                        paddingLeft={"7px"}
                        display={"flex"}
                        gap={"96px"}
                        width={"1286px"}
                    >
                        <Box display={"flex"} gap={"110px"}>
                            <Link
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "100%",
                                    color: "#1d1d1d",
                                    cursor: "pointer",
                                }}
                                underline="none"
                                color="inherit"
                            >
                                Ковры
                            </Link>
                            <Link
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "100%",
                                    color: "#1d1d1d",
                                    cursor: "pointer",
                                }}
                                underline="none"
                                color="inherit"
                            >
                                Коврики
                            </Link>
                            <Link
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "100%",
                                    color: "#1d1d1d",
                                    cursor: "pointer",
                                }}
                                underline="none"
                                color="inherit"
                            >
                                Для ванной
                            </Link>
                            <Link
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "100%",
                                    color: "#1d1d1d",
                                    cursor: "pointer",
                                }}
                                underline="none"
                                color="inherit"
                            >
                                Дорожки
                            </Link>
                            <Link
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "100%",
                                    color: "#1d1d1d",
                                    cursor: "pointer",
                                }}
                                underline="none"
                                color="inherit"
                            >
                                Особенные ковры
                            </Link>
                            <Link
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "100%",
                                    color: "#1d1d1d",
                                    cursor: "pointer",
                                }}
                                underline="none"
                                color="inherit"
                            >
                                Центр поддержки
                            </Link>
                            <Link
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "400px",
                                    lineHeight: "100%",
                                    color: "#1d1d1d",
                                    cursor: "pointer",
                                }}
                                underline="none"
                                color="inherit"
                            >
                                Контакты
                            </Link>
                        </Box>
                    </Stack>
                </Container>
            </div>
        </>
    );
};
