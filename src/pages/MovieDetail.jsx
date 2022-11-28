import React, {useState,useEffect} from 'react'
import {useNavigate}  from 'react-router-dom'
import {MovieState } from '../movieState'

const MovieDetail = () => {
    const history = useNavigate();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    
    console.log(history)
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail