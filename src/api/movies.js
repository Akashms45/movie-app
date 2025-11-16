import axios from "axios";
import { setMovies } from "../slice/movieSlice";

const BaseURL = "https://fooapi.com/api/movies";

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(BaseURL);
    dispatch(setMovies(data.data));

    return data.data;
  } catch (err) {
    return err;
  }
};

// export const getMoviesBySearch = (value) => async (dispatch) => {
//   const url = BaseURL + "/";
//   try {
//     const { data } = await axios.get(url, {
//       params: {
//         search: value,
//       },
//     });
//     dispatch(setMovies(data));
//   } catch (err) {
//     return err;
//   }
// };
