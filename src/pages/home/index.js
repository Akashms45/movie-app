import Navbar from "../../components/Navbar/";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";
import { getMoviesByGenre } from "../../utils/getMovieByGenre";

const Home = () => {
  const dispatch = useDispatch();

  const { movies, searchValue, genreSearch } = useSelector(
    (state) => state.movies
  );

  const filterByMovieName = getMoviesBySearch(movies, searchValue);

  const filteredByGenre = getMoviesByGenre(filterByMovieName, genreSearch);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, marginTop: 10, marginLeft: 6 }}>
        <Grid container spacing={2}>
          {filteredByGenre?.length > 0 &&
            filteredByGenre.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
