import { Stack, IconButton, Badge } from "@mui/material";
import Contact from "../../../assets/header-img/contact";
import Cart from "../../../assets/header-img/cart";
import Like from "../../../assets/header-img/like";

export const HeaderButton = () => {
    return (
        <>
            <Stack direction={"row"} gap={"30px"}>
                <IconButton>
                    <Contact />
                </IconButton>
                <IconButton>
                    <Badge badgeContent={5} color="error">
                        <Like />
                    </Badge>
                </IconButton>
                <IconButton>
                    <Badge badgeContent={2} color="error">
                        <Cart />
                    </Badge>
                </IconButton>
            </Stack>
        </>
    );
};
