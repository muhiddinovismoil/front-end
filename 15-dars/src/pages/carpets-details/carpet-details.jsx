import React from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Container,
    Grid2,
    IconButton,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import { COLORS } from "../../config/color";
import { CardBadge } from "../../custom/card-badge";
import {
    allCarpets,
    discountedCarpetsData,
    newCarpetsData,
} from "../../data/carts-mock.data";
import mainImg from "../../assets/carpet-details/main.svg";
import carpetDetailImg from "../../assets/carpet-details/carpet-detail_img.svg";
import carpetDetailImg2 from "../../assets/carpet-details/carpet-detail_img2.svg";
import carpetDetailImg3 from "../../assets/carpet-details/carpet-detail_img3.svg";
import { PriceInstallment } from "../../custom/price-installment";
import { SecondaryButton } from "../../components/secondary-button";
import LikeIco from "../../assets/carpet-details/like";
import deliveryIco from "../../assets/carpet-details/deliveryIco.svg";
import deliveryIco2 from "../../assets/carpet-details/deliveryIco2.svg";
import SocialNetwork from "../../assets/carpet-details/social-network.ico";
import { CartCard } from "../../components/carpet-card";
export const CarpetDetails = () => {
    const { id } = useParams();
    const [counter, setCount] = React.useState(0);
    const [
        {
            name,
            rate,
            count,
            size,
            old_price,
            new_price,
            monthly_price,
            price,
            author_code,
            badge,
            mateial,
            density,
            thickness,
            weight,
            made_in,
            author,
            type,
        },
    ] = allCarpets.filter((item) => item.id == id);

    return (
        <>
            <section>
                <Box>
                    <Container maxWidth="xl">
                        <Stack
                            direction={"row"}
                            pt={"30px"}
                            pb={"16px"}
                            gap={"4px"}
                        >
                            <Typography
                                variant="body2"
                                color="initial"
                                fontSize={"18px"}
                                sx={{ cursor: "pointer" }}
                            >
                                Главная / Ковры /{" "}
                            </Typography>
                            <Typography
                                variant="body2"
                                color={COLORS.primary}
                                fontSize={"18px"}
                            >
                                {name}
                            </Typography>
                        </Stack>
                        <Typography
                            variant="h2"
                            color={COLORS.titleColor}
                            fontWeight={400}
                            lineHeight={"140%"}
                        >
                            {name}
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            sx={{
                                borderBottom: "1.46px solid rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                gap={"16px"}
                                pb={"16px"}
                            >
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={"8.39px"}
                                >
                                    <Rating readOnly value={rate} />
                                    <Typography
                                        variant="body2"
                                        color={COLORS.opacityColor}
                                        mt={"1px"}
                                    >
                                        {rate} отзывов
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    color={COLORS.opacityColor}
                                >
                                    {count}
                                </Typography>
                            </Stack>
                            <Typography
                                variant="body2"
                                pb={"16px"}
                                color={COLORS.opacityColor}
                            >
                                {author_code}
                            </Typography>
                        </Stack>
                        <Stack
                            direction={"row"}
                            py={"24px"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Stack direction={"row"} gap={"40px"}>
                                <Stack gap={"40px"}>
                                    <Box sx={{ cursor: "pointer" }}>
                                        <img
                                            src={carpetDetailImg}
                                            alt="carpet detail image"
                                        />
                                    </Box>
                                    <Box sx={{ cursor: "pointer" }}>
                                        <img
                                            src={carpetDetailImg2}
                                            alt="carpet detail image"
                                        />
                                    </Box>
                                    <Box sx={{ cursor: "pointer" }}>
                                        <img
                                            src={carpetDetailImg3}
                                            alt="carpet detail image"
                                        />
                                    </Box>
                                </Stack>
                                <Stack position={"relative"}>
                                    <CardBadge>{badge}</CardBadge>
                                    <Box sx={{ cursor: "pointer" }}>
                                        <img src={mainImg} alt="" />
                                    </Box>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Stack direction={"row"} gap={"46px"}>
                                    <Stack gap={"23px"}>
                                        <Stack>
                                            {type == "discount" ? (
                                                <PriceInstallment
                                                    key={id}
                                                    old_price={old_price}
                                                    decor={{
                                                        textDecoration:
                                                            "line-through",
                                                    }}
                                                >
                                                    Старая цена:
                                                </PriceInstallment>
                                            ) : (
                                                <PriceInstallment
                                                    key={id}
                                                    price={price}
                                                >
                                                    Цена:
                                                </PriceInstallment>
                                            )}
                                        </Stack>
                                        <Stack gap={"16px"}>
                                            <Typography variant="body2">
                                                <span
                                                    style={{
                                                        color: COLORS.opacityColor,
                                                    }}
                                                >
                                                    Размер:
                                                </span>{" "}
                                                {size}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color={COLORS.primary}
                                                sx={{ cursor: "pointer" }}
                                            >
                                                Перейти к описанию
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack gap={"23px"}>
                                        {type == "discount" ? (
                                            <PriceInstallment
                                                key={id}
                                                new_price={new_price}
                                            >
                                                Новая цена:
                                            </PriceInstallment>
                                        ) : (
                                            <PriceInstallment
                                                key={id}
                                                monthly_price={monthly_price}
                                            >
                                                В рассрочку:
                                            </PriceInstallment>
                                        )}
                                        <Stack gap={"16px"}>
                                            <Box
                                                display={"flex"}
                                                alignItems={"center"}
                                                gap={"5px"}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    mr={"15.67px"}
                                                    color={COLORS.opacityColor}
                                                >
                                                    Количество:
                                                </Typography>
                                                <IconButton
                                                    disableRipple
                                                    sx={{
                                                        py: "2px",
                                                        px: "8px",
                                                        textAlign: "center",
                                                        backgroundColor: `${COLORS.primary}`,
                                                        color: "#fff",
                                                        fontSize: "16px",
                                                    }}
                                                    onClick={() =>
                                                        setCount(
                                                            counter != 0
                                                                ? counter - 1
                                                                : counter + 0
                                                        )
                                                    }
                                                >
                                                    -
                                                </IconButton>
                                                <Typography variant="body2">
                                                    {counter}
                                                </Typography>
                                                <IconButton
                                                    disableRipple
                                                    sx={{
                                                        py: "2px",
                                                        px: "6px",
                                                        textAlign: "center",
                                                        backgroundColor: `${COLORS.primary}`,
                                                        color: "#fff",
                                                        fontSize: "16px",
                                                    }}
                                                    onClick={() =>
                                                        setCount(counter + 1)
                                                    }
                                                >
                                                    +
                                                </IconButton>
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                color={COLORS.primary}
                                                sx={{ cursor: "pointer" }}
                                            >
                                                Подробнее о рассрочке
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    pt={"32px"}
                                >
                                    <Box maxWidth={"300px"} flexGrow={1}>
                                        <SecondaryButton fullWidth>
                                            В корзину
                                        </SecondaryButton>
                                    </Box>
                                    <Box
                                        px={"10px"}
                                        borderRadius={"10px"}
                                        border={"1px solid"}
                                        borderColor={COLORS.opacityColor}
                                        py={"5px"}
                                        mr={"20px"}
                                    >
                                        <IconButton>
                                            <LikeIco />
                                        </IconButton>
                                    </Box>
                                </Stack>
                                <Stack py={"32px"}>
                                    <Stack
                                        boxShadow={
                                            "0 0 7px 0 rgba(0, 0, 0, 0.1)"
                                        }
                                        bgcolor={"#FFFF"}
                                        py={"20px"}
                                        pr={"131px"}
                                        pl={"20px"}
                                        gap={"19px"}
                                    >
                                        <Box display={"flex"} gap={"9px"}>
                                            <img
                                                src={deliveryIco}
                                                alt="delivery info icon"
                                            />
                                            <Typography
                                                variant="body2"
                                                color="initial"
                                            >
                                                Возврат в течение 14 дней
                                            </Typography>
                                        </Box>
                                        <Box display={"flex"} gap={"9px"}>
                                            <img
                                                src={deliveryIco2}
                                                alt="delivery info icon"
                                            />
                                            <Typography
                                                variant="body2"
                                                color="initial"
                                            >
                                                Среднее время доставки 2.5 дня
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                color={COLORS.primary}
                                                sx={{ cursor: "pointer" }}
                                            >
                                                Подробнее
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                                <Stack maxWidth={"335px"} gap={"16px"}>
                                    <Typography variant="body2" color="initial">
                                        Нужна помощь с выбором? Просто напишите
                                        нам в WhatsApp и мы обязательно вам
                                        поможем!
                                    </Typography>
                                    <Box maxWidth={"290px"}>
                                        <SecondaryButton
                                            fullWidth
                                            style={{
                                                backgroundColor: COLORS.primary,
                                                gap: "10px",
                                            }}
                                        >
                                            <SocialNetwork />
                                            Написать
                                        </SecondaryButton>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </section>
            <Box py={"64px"}>
                <Container maxWidth="xl">
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        borderBottom={1}
                        borderColor={COLORS.opacityColor}
                    >
                        <Box
                            px={"90.5px"}
                            py={"12.5px"}
                            bgcolor={COLORS.primary}
                            sx={{ cursor: "pointer" }}
                        >
                            <Typography
                                variant="body1"
                                color={COLORS.ligthColor}
                            >
                                Характеристики
                            </Typography>
                        </Box>
                        <Box
                            px={"90.5px"}
                            py={"12.5px"}
                            sx={{ cursor: "pointer" }}
                        >
                            <Typography
                                variant="body1"
                                color={COLORS.titleColor}
                            >
                                Купить в рассрочку
                            </Typography>
                        </Box>
                        <Box
                            px={"90.5px"}
                            py={"12.5px"}
                            sx={{ cursor: "pointer" }}
                        >
                            <Typography
                                variant="body1"
                                color={COLORS.titleColor}
                            >
                                Отзывы
                            </Typography>
                        </Box>
                        <Box
                            px={"90.5px"}
                            py={"12.5px"}
                            sx={{ cursor: "pointer" }}
                        >
                            <Typography
                                variant="body1"
                                color={COLORS.titleColor}
                            >
                                Написать отзыв
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack pt={"48px"} maxWidth={"398px"}>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            pb={"16px"}
                            borderBottom={1}
                        >
                            <Typography>Материал</Typography>
                            <Typography>{mateial}</Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            py={"16px"}
                            borderBottom={1}
                        >
                            <Typography>Толщина</Typography>
                            <Typography>{thickness}</Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            py={"16px"}
                            borderBottom={1}
                        >
                            <Typography>Вес</Typography>
                            <Typography>{weight}</Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            py={"16px"}
                            borderBottom={1}
                        >
                            <Typography>Плотность</Typography>
                            <Typography>{density}</Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            py={"16px"}
                            borderBottom={1}
                        >
                            <Typography>Производитель</Typography>
                            <Typography>{author}</Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            py={"16px"}
                        >
                            <Typography>Страна</Typography>
                            <Typography>{made_in}</Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box pb={"100px"} pt={"36px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
                        <Typography variant="h2">
                            Вам может понравиться
                        </Typography>
                    </Stack>
                    <Grid2 container spacing={"40px"} pt={"29px"}>
                        {type == "discount"
                            ? newCarpetsData.map((item) => (
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
                              ))
                            : discountedCarpetsData.map((item) => (
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
