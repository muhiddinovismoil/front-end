import { Container, Stack } from "@mui/material";
import { HeaderSearch } from "./components/header-search";
import { HeaderButton } from "./components/header-button";
import { HeaderNav } from "./components/header-nav";
export const Header = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Stack direction={"row"} py={"31px"} gap={"60px"}>
                    <HeaderSearch />
                    <HeaderButton />
                </Stack>
            </Container>
            <HeaderNav />
        </>
    );
};
