import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_ENDPOINT } from '../context/context';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "False") {
      setError({ show: true, msg: data.Error });
      setLoading(false)
    } else {
      setMovie(data);
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])
  
  if (loading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return <div className='error-page'>
      <h1>{error.msg}</h1>
      <Link to="/" className='btn'>back to movies</Link>
    </div>
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
    return (
      <div className='single-movie'>
        <img src={poster} alt={title} />
        <div className="single-movie-info">
          <h2 className='single-title'>{title}</h2>
          <p className='release'>{year}</p>
          <p className='description'>{plot}</p>
          <Link to="/" className='btn'>back to movies</Link>
        </div>
      </div>
    );
}

export default Movie;
