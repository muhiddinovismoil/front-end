/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Rating, Stack, Typography } from "@mui/material";
import BadgeIcon from "../../assets/icon";
import { CardBadge } from "../../layout/card-badge/card-badge";
export const DiscountCards = ({
    id,
    img,
    model,
    size,
    made_in,
    rate,
    old_price,
    new_price,
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
            <CardBadge>-20%</CardBadge>
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
                <Stack direction={"row"} gap={"15px"} pt={"12px"}>
                    <Box>
                        <Typography
                            variant="h4"
                            color="initial"
                            fontSize={"14px"}
                            sx={{ opacity: "0.5" }}
                        >
                            Старая цена
                        </Typography>
                        <Typography
                            pt={"8px"}
                            variant="body2"
                            color="#494949"
                            fontSize={"18px"}
                            sx={{
                                textDecoration: "line-through",
                            }}
                        >
                            {old_price} ₸
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h4"
                            color="initial"
                            fontSize={"14px"}
                            sx={{ opacity: "0.5" }}
                        >
                            Новая цена
                        </Typography>
                        <Typography
                            variant="body2"
                            color="#618c78"
                            fontSize={"18px"}
                            pt={"8px"}
                        >
                            {new_price} ₸
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};
