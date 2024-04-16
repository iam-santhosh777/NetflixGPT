import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMoviesList = async () => {
        try {
            const responses = await Promise.all([
                fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN", API_OPTIONS),
                fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=IN", API_OPTIONS),
                fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN", API_OPTIONS),
                fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN", API_OPTIONS),
                // Add additional fetch requests here
                // fetch("Another API URL", API_OPTIONS),
                // fetch("Yet another API URL", API_OPTIONS),
            ]);

            const responseData = await Promise.all(responses.map(response => response.json()));

            // responseData is an array containing the responses from all APIs
            const nowPlayingMovies = responseData[0].results; // Assuming the first API call is for now playing movies
            // You can process data from other API calls similarly
            const popularMovies = responseData[1].results;
            const topRatedMovies = responseData[2].results;
            const upcomingMovies = responseData[3].results;

            dispatch(addNowPlayingMovies(nowPlayingMovies));
            dispatch(addPopularMovies(popularMovies));
            dispatch(addTopRatedMovies(topRatedMovies));
            dispatch(addUpcomingMovies(upcomingMovies));

            // Dispatch data from other API calls to Redux store as needed
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getNowPlayingMoviesList();
    }, []);
}

export default useNowPlayingMovies;
