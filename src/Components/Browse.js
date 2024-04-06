import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants';
import axios from 'axios';

const Browse = () => {

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
    console.log(responseData);
    
  }

  useEffect(() => {
    getNowPlayingMoviesList();
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse