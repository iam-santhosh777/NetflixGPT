import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPLayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        /**
         * Browse Page Structure
         *  - Show Banner (Video Background)
         *  - Show Video Title
         *  - Show Video Description
         * Secondary Container
         *  - Show Now Playing Movies
         *  - Show Trending Movies
         *  - Show Top Rated Movies
         *  - Show Upcoming Movies
         *  - Show Latest Movies
         *  - Show Originals
         *  - Show Action
         *  - Show Horror
         *  - Show Comedy
         *  - Show Documentaries
         *  - Show Science Fiction
         *  - Show Anime
         *  - Show Sports
         */
      }
    </div>
  )
}

export default Browse