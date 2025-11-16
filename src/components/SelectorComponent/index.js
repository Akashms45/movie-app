import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setGenreSearch } from "../../slice/movieSlice";

export default function SelectorComponent() {
  // const [age, setAge] = React.useState("");

  const { genreSearch } = useSelector((state) => state.movies);

  console.log(genreSearch);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setGenreSearch(e.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "#2693f2ff" }}>
          Genre
        </InputLabel>
        <Select
          sx={{
            color: "#fff", // text color
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#2693f2ff", // default border color
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2693f2ff", // border color on hover
            },
            ".MuiSvgIcon-root": {
              fill: "#fff", // dropdown arrow color
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genreSearch}
          label="Genre"
          onChange={handleChange}
        >
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Action"}>Action</MenuItem>
          <MenuItem value={"Horror"}>Horror</MenuItem>
          <MenuItem value={"Crime"}>Crime</MenuItem>
          <MenuItem value={"History"}>History</MenuItem>
          <MenuItem value={"Biography"}>Biography</MenuItem>
          <MenuItem value={"Adventure"}>Adventure</MenuItem>
          <MenuItem value={"Western"}>Western</MenuItem>
          <MenuItem value={"Romance"}>Romance</MenuItem>
          <MenuItem value={"Sci-fi"}>Sci-fi</MenuItem>
          <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
          <MenuItem value={"Thriller"}>Thriller</MenuItem>
          <MenuItem value={"Family"}>Family</MenuItem>
          <MenuItem value={"War"}>War</MenuItem>
          <MenuItem value={"Comedy"}>Comedy</MenuItem>
          <MenuItem value={"Mystery"}>Mystery</MenuItem>
          <MenuItem value={"Documentary"}>Documentary</MenuItem>
          <MenuItem value={"shor"}>short</MenuItem>
          <MenuItem value={"Animation"}>Animation</MenuItem>
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"Horror"}>Horror</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
