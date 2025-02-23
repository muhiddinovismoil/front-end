import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { COLORS } from "../../../config/color";
import { navData } from "./nav-data";
const CustomNavLink = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: ${COLORS.titleColor};
    &:hover {
        color: ${COLORS.primary};
    }
`;

export const HeaderNav = () => {
    return (
        <>
            <Box py={"30px"} bgcolor={COLORS.ligthColor}>
                <Container maxWidth="xl">
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        {navData.map((item) => (
                            <CustomNavLink
                                key={item.id}
                                id={item.id}
                                to={item.to}
                            >
                                {item.name}
                            </CustomNavLink>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </>
    );
};
