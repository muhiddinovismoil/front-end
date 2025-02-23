import {
    Stack,
    IconButton,
    Typography,
    TextField,
    InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.svg";
import Location from "../../../assets/header-img/location";
import SearchIcon from "../../../assets/header-img/search-icon";
export const HeaderSearch = () => {
    return (
        <>
            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"60px"}
                flexGrow={1}
            >
                <Link to={"/"}>
                    <img src={logoImg} alt="logo image" />
                </Link>
                <Stack direction={"row"} alignItems={"center"}>
                    <IconButton>
                        <Location />
                    </IconButton>
                    <Typography>Алматы</Typography>
                </Stack>
                <Stack flexGrow={1}>
                    <TextField
                        placeholder="Поиск по товарам"
                        variant="standard"
                        size="small"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment
                                        sx={{ mb: "10px" }}
                                        position="end"
                                    >
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Stack>
            </Stack>
        </>
    );
};
