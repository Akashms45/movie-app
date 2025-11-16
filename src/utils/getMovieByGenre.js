export const getMoviesByGenre = (movies, value) => {
  const filteredGenreMovies =
    value?.length > 0
      ? movies?.filter((movie) =>
          movie.genre.toLowerCase().includes(value.toLowerCase())
        )
      : movies;

  return filteredGenreMovies;
};
