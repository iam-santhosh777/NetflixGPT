import { useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => (store.movies?.trailerVideo));
  useTrailerVideo({movieId});

  return (
    <div className=''>
      <iframe
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=WUhXe9nBJuxjr98C&autoplay=1&mute=1"} 
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </div>
  )
}

export default VideoBackground