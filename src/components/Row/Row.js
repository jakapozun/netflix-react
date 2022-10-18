import React, {useEffect, useState} from 'react';
import './Row.css';
import axios from "../../axios";

const Row = ({title, fetchUrl, isLargeRow = false}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(fetchUrl);
            setMovies(req.data.results)
            return req;
        }

        fetchData();
    }, [fetchUrl]);


    return (
        <div className={'row'}>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                             src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                             alt={movie.name}/>
                    )
                ))}
            </div>
        </div>
    );
};

export default Row;