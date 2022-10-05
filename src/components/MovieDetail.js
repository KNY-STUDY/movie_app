import React from "react";
import PropTypes from "prop-types";
import "../components/css/Detail.css"


function MovieDetail({url, year, rating, coverImg, title, summary, genres}) {
    let summaryText = summary;
    if(summaryText.length > 1034) {
        summaryText = summaryText.substring(0, 1030) + "...";
    }
    return (
        <div className='detailContainer'>
            <div className="imgContainer">
                <img className="coverImg" src={coverImg} alt="cover img"/>
            </div>
            <div className="detailInfo">
                <h2 className="detailTitle">{title}</h2>
                <ul className="detailGenres detail">
                    {
                        genres ? genres.map((g) => (<li className="detailGenre" key={g}>{g}</li>)) : null
                    }
                </ul>
                <p className="detailYear detail">{year}</p>
                <p className="detailSummary">{summaryText}</p>
                <a href={url} className="btnGoSite" target="_blank" rel="noopener noreferrer">Go To Site</a>
            </div>
        </div>
    );
};

MovieDetail.propTypes = {
    url: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};

export default MovieDetail;
