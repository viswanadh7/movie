import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'

function Detailmovie() {

    const params = useParams();
    const movieID = params.id;


    let url = `http://www.omdbapi.com/?i=${movieID}&apikey=b06c5dd5`;

    const [detailMovie, setDetailMovie] = useState();

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            // console.log(data);
            setDetailMovie(data);
        })
    }, [url])


    return (
        <div className='detailPage'>
            <div className='detailCard'>
                {detailMovie && <img src={detailMovie.Poster} alt="" />}
                <div className="detailBody">
                    {/* <p>{JSON.stringify(detailMovie)}</p> */}
                    {detailMovie && <p>Title : {detailMovie.Title}</p>}
                    {detailMovie && <p>Genre : {detailMovie.Genre}</p>}
                    {detailMovie && <p>Director : {detailMovie.Director}</p>}
                    {detailMovie && <p>Writer : {detailMovie.Writer}</p>}
                    {detailMovie && <p>Actors : {detailMovie.Actors}</p>}
                    {detailMovie && <p>Rated : {detailMovie.Rated}</p>}
                    {detailMovie && <p>imdbRating : {(detailMovie.imdbRating) / 2}</p>}
                    {detailMovie && <p>Plot : {detailMovie.Plot}</p>}
                </div>
            </div>

        </div>
    )
}

export default Detailmovie
