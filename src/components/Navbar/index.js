import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectorComponent from "../SelectorComponent";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../slice/movieSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const { serachValue } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  const onSearchMovie = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  console.log(serachValue);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#141B41" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MOVIE APP
          </Typography>
          <Search onChange={onSearchMovie}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
          <SelectorComponent />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
