import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/home";
import Detailmovie from "./components/detailmovie";
// import About from './components/About';
function App() {
    const [movieName, setmovieName] = useState("Saaho");
    const [movieData, showMovieData] = useState();

    let url = `http://www.omdbapi.com/?s=${movieName}&apikey=b06c5dd5`;
    //let plot_url = `http://www.omdbapi.com/?t=${movieName}&apikey=b06c5dd5`

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                showMovieData(data);
            });
    }, [url]);

    // useEffect(() => {
    //   fetch(plot_url).then(res => res.json()).then(data => console.log(data))
    // }, [movieName])

    return (
        <BrowserRouter>
            <Routes>
                {movieData && (
                    <Route
                        exact
                        path=""
                        element={
                            <Home
                                setmovieName={setmovieName}
                                movieData={movieData}
                            />
                        }
                    />
                )}
                <Route path="/:id" element={<Detailmovie />} />
                {/* <Route path='about' element={<About/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
