import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    if(!movies) return;
    
    const mainMovie = movies[2];
    // console.log(mainMovie);

    const {original_title, overview, poster_path} = mainMovie;

    // console.log(movies);
  return (
    <div>
        <VideoTitle  title={original_title} overview={overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  );
};

export default MainContainer;