import React from 'react'
import video from '../assests/SaahoTeaser-compressed-2.mp4'
import './home.css'
import Moviecard from './moviecard'


function Home({ setmovieName, movieData }) {

    function sendName(e) {
        e.preventDefault()
        setmovieName(e.target.inputText.value)
    }
    return (
        <div>
            <video className='background' autoPlay loop muted>
                <source src={video} />
            </video>

            <div className='searchBar'>
                <form onSubmit={sendName} className="input-group mb-3">
                    <input name='inputText' type="text" className="form-control" placeholder="Search for a Movie..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
                </form>
            </div>
            <div className="movie-card">
                <Moviecard movieData={movieData} />
            </div>
        </div>
    )
}

export default Home

