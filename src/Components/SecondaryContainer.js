import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">

      <div className="-mt-40 relative z-20">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
      </div>
      
    </div>
    // {
    //   /**
    //    * MovieList - Popular -> Popular Movies List
    //    * MovieList - NowPlaying -> Now Playing Movies List
    //    * MovieList - Trending -> Trending Movies List
    //    * MovieList - TopRated -> Top Rated Movies List 
    //    * MovieList - Upcoming -> Upcoming Movies List
    //    * MovieList - Latest -> Latest Movies List
    //    * MovieList - Originals -> Originals Movies List 
    //    * MovieList - Action -> Action Movies List
    //    * MovieList - Horror -> Horror Movies List
    //    * MovieList - Comedy
    //    * MovieList - Documentaries
    //    * MovieList - Science Fiction
    //    * MovieList - Anime
    //    * MovieList - Sports
    //    * 
    //    */
    // }
    
  )
}

export default SecondaryContainer