import heroImg from "../../assets/hero/hero-img.svg";
import heroImg2 from "../../assets/hero/hero-img2.svg";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
export const Hero = () => {
    return (
        <div style={{ backgroundColor: "#618c78" }}>
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={6}
                    width={"1283px"}
                    pt={7}
                    pb={5}
                >
                    <Box
                        sx={{
                            maxWidth: 524,
                            height: 239,
                            gap: 4,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            variant="h1"
                            color="#f9f9f9"
                            fontSize={60}
                            lineHeight="130%"
                            fontWeight={700}
                        >
                            Новая коллекция ковров Venetta
                        </Typography>
                        <Button
                            disableRipple
                            sx={{
                                backgroundColor: "#cb4a4a",
                                borderRadius: 2,
                                maxWidth: 198,
                                height: 51,
                                color: "#fff",
                                fontWeight: 700,
                            }}
                        >
                            Смотреть все
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            width: 772,
                            display: "flex",
                            overflow: "hidden",
                            padding: "49px 77px 57px",
                            gap: 4,
                        }}
                    >
                        <img
                            src={heroImg}
                            alt="hero-img"
                            style={{
                                flex: 1,
                                width: "303px",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <img
                            src={heroImg2}
                            alt="hero-img2"
                            style={{
                                flex: 1,
                                width: "293px",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Stack>
            </Container>
        </div>
    );
};
