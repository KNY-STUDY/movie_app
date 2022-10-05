import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/Movie.css"

function Movie({id, year, rating, coverImg, title, genres, summary}) {
    let summaryText = summary;
    let titleText = title;
    if(summaryText.length > 187) {
        summaryText = summaryText.substring(0, 184) + "...";
    }
    if(titleText.length > 20) {
        titleText = titleText.substring(0, 18) + "...";
    }
    return (
        <Link to={`/movie/${id}`}>
        <div className="movie">
            <img src={coverImg} alt="cover img" className="coverImg"/>
            <div className="infos">
                <h2 className="title">{titleText}</h2>
                <ul className="genres info">
                    {
                        genres ? genres.map((g) => (<li className="genre" key={g}>{g}</li>)) : null
                    }
                </ul>
                <span className="info year">{year}</span>
                <span className="summary info">{summaryText}</span>
            </div>
        </div>
        </Link>
    );
};

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string.isRequired
};

export default Movie;