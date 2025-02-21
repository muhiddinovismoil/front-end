import { Box, Container, Link, Typography } from "@mui/material";
import { Hero } from "./components/hero/hero";
import { MainLayout } from "./layout/main-layout";
import { Card } from "./components/carpets-card/carpets-card";
import { newCarpets } from "./data/new-carpets";
import { DiscountCards } from "./components/carpets-card/discount-cards";
import { discountCarpets } from "./data/discount-carpets";
function App() {
    return (
        <>
            <MainLayout>
                <Hero />
                <Container>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={"32px"}
                        pt={"100px"}
                        pb={"29px"}
                    >
                        <Typography
                            variant="h2"
                            color="initial"
                            fontSize={"40px"}
                            fontWeight={"700"}
                        >
                            Новинки
                        </Typography>
                        <Link
                            color="#648e7a;"
                            pb={"9px"}
                            fontSize={"18px"}
                            pt={"18px"}
                            sx={{ cursor: "pointer" }}
                        >
                            Все новинки
                        </Link>
                    </Box>
                    <Box display={"flex"} gap={"40px"}>
                        {newCarpets.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                model={item.model}
                                made_in={item.made_in}
                                size={item.size}
                                rate={item.rate}
                                price={item.price}
                                monthly_price={item.monthly_price}
                            />
                        ))}
                    </Box>
                </Container>
                <Container>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={"32px"}
                        pt={"100px"}
                        pb={"32px"}
                    >
                        <Typography
                            variant="h2"
                            color="initial"
                            fontSize={"40px"}
                            fontWeight={"700"}
                        >
                            Скидки
                        </Typography>
                        <Link
                            color="#648e7a;"
                            pb={"9px"}
                            fontSize={"18px"}
                            pt={"18px"}
                            sx={{ cursor: "pointer" }}
                        >
                            Все скидки
                        </Link>
                    </Box>
                    <Box display={"flex"} gap={"40px"}>
                        {discountCarpets.map((item) => (
                            <DiscountCards
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                model={item.model}
                                size={item.size}
                                made_in={item.made_in}
                                rate={item.rate}
                                old_price={item.old_price}
                                new_price={item.new_price}
                            />
                        ))}
                    </Box>
                </Container>
            </MainLayout>
        </>
    );
}
export default App;
