import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
    discountedCarpetsData,
    newCarpetsData,
} from "../../data/carts-mock.data";
import { COLORS } from "../../config/color";
import { SecondaryButton } from "../../components/secondary-button";
import heroImg from "../../assets/hero/hero-img.png";
import heroImg2 from "../../assets/hero/hero-img2.png";
import { CartCard } from "../../components/carpet-card";
export const Home = () => {
    return (
        <>
            <section>
                <Box bgcolor={COLORS.primary} py={"98px"}>
                    <Container maxWidth="xl">
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Box maxWidth={"524px"}>
                                <Typography variant="h1" mb={"32px"}>
                                    Новая коллекция ковров Venetta
                                </Typography>
                                <SecondaryButton>Смотреть все</SecondaryButton>
                            </Box>
                            <Stack direction={"row"}>
                                <img src={heroImg} alt="hero image 1" />
                                <img src={heroImg2} alt="hero image 2" />
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </section>
            <Box py={"100px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
                        <Typography variant="h2">Новинки</Typography>
                        <Link
                            to="/all-news"
                            style={{
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "140%",
                                paddingTop: "10px",
                                color: COLORS.primary,
                            }}
                        >
                            Все новинки
                        </Link>
                    </Stack>
                    <Grid2 container spacing={"40px"} pt={"29px"}>
                        {newCarpetsData.map((item) => (
                            <CartCard
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                badge={item.badge}
                                made_in={item.made_in}
                                rate={item.rate}
                                size={item.size}
                                price={item.price}
                                monthly_price={item.monthly_price}
                            />
                        ))}
                    </Grid2>
                </Container>
            </Box>
            <Box pb={"100px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
                        <Typography variant="h2">Скидки</Typography>
                        <Link
                            to="/all-news"
                            style={{
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "140%",
                                paddingTop: "10px",
                                color: COLORS.primary,
                            }}
                        >
                            Все скидки
                        </Link>
                    </Stack>
                    <Grid2 container spacing={"40px"} pt={"29px"}>
                        {discountedCarpetsData.map((item) => (
                            <CartCard
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                badge={item.badge}
                                made_in={item.made_in}
                                rate={item.rate}
                                size={item.size}
                                type={item.type}
                                old_price={item.old_price}
                                new_price={item.new_price}
                            />
                        ))}
                    </Grid2>
                </Container>
            </Box>
        </>
    );
};
