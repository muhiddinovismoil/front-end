/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Box, Grid2, Rating, Stack, Typography } from "@mui/material";
import { COLORS } from "../config/color";
import LikeIcon from "../assets/carpets-img/like.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CardBadge } from "../custom/card-badge";
const ProductWrapper = styled.div`
    border-radius: 10px;
    height: 524px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    position: relative;
    padding-top: 68px;
    padding-bottom: 21px;
    padding-left: 20px;
    padding-right: 20px;
`;
const MonthlyPriceBadge = styled.span`
    background-color: #618c78;
    padding: 2px 7px;
    position: absolute;
    color: #fff;
`;
export const CartCard = ({
    id,
    img,
    name,
    size,
    badge,
    rate,
    made_in,
    price,
    monthly_price,
    type,
    old_price,
    new_price,
}) => {
    const navigate = useNavigate();
    return (
        <Grid2
            size={3}
            sx={{
                cursor: "pointer",
            }}
            onClick={() => navigate(`/carpets-details/${id}`)}
        >
            <ProductWrapper>
                <CardBadge>{badge}</CardBadge>
                <Box sx={{ position: "absolute", top: "23px", right: "22px" }}>
                    <img src={LikeIcon} alt="like icon" />
                </Box>
                <Box
                    mb={"20px"}
                    textAlign={"center"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(`/carpets-details/${id}`)}
                >
                    <img src={img} alt="cart image" />
                </Box>
                <Typography
                    sx={{ cursor: "pointer" }}
                    mb={"8px"}
                    maxWidth={"175px"}
                    variant="body1"
                    onClick={() => navigate(`/carpets-details/${id}`)}
                >
                    {name}
                </Typography>
                <Typography mb={"8px"} maxWidth={"175px"} variant="body2">
                    Размер: {size}
                </Typography>
                <Typography variant="body2">{made_in}</Typography>
                <Box
                    display={"flex"}
                    mb={"16px"}
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
                </Box>
                <Box display={"flex"} gap={"15px"}>
                    {type ? (
                        <>
                            <Stack>
                                <Typography
                                    variant="body2"
                                    mb={"8px"}
                                    color={COLORS.opacityColor}
                                >
                                    Старая цена
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color={COLORS.opacityColor}
                                    sx={{ textDecoration: "line-through" }}
                                >
                                    {old_price}
                                </Typography>
                            </Stack>
                            <Stack
                                maxWidth={"129px"}
                                flexGrow={1}
                                position={"relative"}
                            >
                                <Typography
                                    variant="body2"
                                    mb={"8px"}
                                    color={COLORS.opacityColor}
                                >
                                    Новая цена
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color={COLORS.primary}
                                >
                                    {new_price}
                                </Typography>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Stack maxWidth={"81px"} flexGrow={1}>
                                <Typography
                                    variant="body2"
                                    mb={"8px"}
                                    color={COLORS.opacityColor}
                                >
                                    Цена
                                </Typography>
                                <Typography variant="body1" color="initial">
                                    {price}
                                </Typography>
                            </Stack>
                            <Stack
                                maxWidth={"129px"}
                                flexGrow={1}
                                position={"relative"}
                            >
                                <Typography
                                    variant="body2"
                                    mb={"8px"}
                                    color={COLORS.opacityColor}
                                >
                                    В рассрочку
                                </Typography>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Typography variant="body2" color="initial">
                                        <MonthlyPriceBadge>
                                            {monthly_price}
                                        </MonthlyPriceBadge>
                                    </Typography>
                                    <Typography
                                        marginLeft={"75px"}
                                        variant="body2"
                                        color={COLORS.opacityColor}
                                    >
                                        х 12 мес
                                    </Typography>
                                </Box>
                            </Stack>
                        </>
                    )}
                </Box>
            </ProductWrapper>
        </Grid2>
    );
};
