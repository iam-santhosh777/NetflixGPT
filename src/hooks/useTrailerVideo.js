import axios  from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useTrailerVideo = ({movieId}) => {
    const dispatch = useDispatch();
 
  // fetch trailer video from TMDB
    const getMoviesVideos = () => {
    axios.get("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS)
    .then(response => {
      //console.log(response.data);
      const filteredTrailer = response.data?.results?.filter((video) => video.type === "Trailer" && video.site === "YouTube");
      const trailer = filteredTrailer.length ? filteredTrailer[0] : response.data?.results[0];
      dispatch(addTrailerVideo(trailer))
    })
    .catch(error => {
      console.error(error);
    })
  }

    useEffect(() => {
        getMoviesVideos();
    }, [])
}

export default useTrailerVideo;