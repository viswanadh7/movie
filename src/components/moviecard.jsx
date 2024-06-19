import React from 'react'
import './moviecard.css'
import NoImage from '../assests/download.jpg'
//import Detailmovie from './detailmovie';

function Moviecard({ movieData }) {


    function CreateCard({ movie }) {
        let image = movie.Poster;
        return (
            <div className="card each-card" >
                <img src={image === 'N/A' ? NoImage : image} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">Year : {movie.Year}</p>
                    <a href={movie.imdbID} className="btn btn-secondary">View Details</a>
                </div>
            </div>
        )
    }

    return (
        <div className='moviecard'>
            {movieData.Search.map((movie) => <CreateCard movie={movie} />)}
            {/* {console.log(movieData)}
            {movieData.Search.map((index) => { console.log(index) })} */}
        </div>

    )
}

export default Moviecard
