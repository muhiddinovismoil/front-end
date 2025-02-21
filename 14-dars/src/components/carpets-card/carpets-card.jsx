/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Rating, Stack, Typography } from "@mui/material";
import { CardBadge } from "../../layout/card-badge/card-badge";
import BadgeIcon from "../../assets/icon";
import styled from "@emotion/styled";
const MonthlyBadge = styled.div`
    background-color: rgb(97, 140, 120);
    width: 60px;
    height: 18px;
    position: absolute;
    left: 0px;
    top: 30px;
    color: #fff;
`;
export const Card = ({
    id,
    img,
    model,
    size,
    made_in,
    rate,
    price,
    monthly_price,
}) => {
    return (
        <Stack
            width={"290px"}
            height={"524px"}
            position={"relative"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            boxShadow={"0 0 10px 0 rgba(0,0,0,0.1)"}
            gap={"20px"}
        >
            <CardBadge>Новинка</CardBadge>
            <BadgeIcon />
            <Stack pt={"50px"}>
                <img
                    style={{ width: "236px", height: "246px" }}
                    src={img}
                    alt="carpet-image"
                />
            </Stack>
            <Stack>
                <Box width={"177px"} pb={"8px"}>
                    <Typography variant="h3" color="initial" fontSize={"18px"}>
                        {model}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="initial"
                        fontSize={"14px"}
                        mt={"8px"}
                    >
                        Размер: {size}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="initial"
                        fontSize={"14px"}
                        mt={"8px"}
                    >
                        Производитель: {made_in}
                    </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"8.39px"}>
                    <Rating defaultValue={rate} readOnly disabled />
                    <Typography
                        variant="body1"
                        color="initial"
                        fontSize={"14px"}
                        sx={{ opacity: "0.5" }}
                    >
                        {rate} отзывов
                    </Typography>
                </Box>
                <Stack direction={"row"} gap={"30px"} pt={"12px"}>
                    <Box>
                        <Typography
                            variant="h4"
                            color="initial"
                            fontSize={"14px"}
                            sx={{ opacity: "0.5" }}
                        >
                            Цена
                        </Typography>
                        <Typography
                            pt={"8px"}
                            variant="body2"
                            color="initial"
                            fontSize={"18px"}
                        >
                            {price} ₸
                        </Typography>
                    </Box>
                    <Box position={"relative"}>
                        <Typography
                            variant="h4"
                            color="initial"
                            fontSize={"14px"}
                            sx={{ opacity: "0.5" }}
                        >
                            В рассрочку
                        </Typography>
                        <Typography
                            variant="body2"
                            color="initial"
                            fontSize={"14px"}
                            pt={"11px"}
                        >
                            <MonthlyBadge>{monthly_price} ₸</MonthlyBadge>
                            <span
                                style={{ color: "#fff", paddingRight: "3px" }}
                            >
                                {monthly_price} ₸
                            </span>{" "}
                            х 12 мес
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};
