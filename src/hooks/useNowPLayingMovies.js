import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMoviesList = async () => {
    
    // with axios
    // axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
    // .then(response => {
    //   console.log(response.data);
    // }) 
    // .catch(error => {
    //   console.error(error);
    // })
    // without axios
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN", API_OPTIONS);
    const responseData = await response.json();
    //console.log(responseData);
    dispatch(addNowPlayingMovies(responseData.results));
    
  }

  useEffect(() => {
    getNowPlayingMoviesList();
  }, [])
}

export default useNowPlayingMovies;