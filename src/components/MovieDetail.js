import React from "react";
import PropTypes from "prop-types";
import "../components/css/Detail.css"

function MovieDetail ( {coverImg, title, summary, genres}){
    const summaryText = summary;
    return (
        <div className="detailContainer">
            <div className="imgBox">
                <img className="coverImg" src={coverImg} alt={title} />
            </div>
            <div className="detailInfo">
                <h2 className="detailTitle">{title}</h2>
                <ul className="detailGenres detail">
                    {
                        genres ? genres.map((g) => (<li className="detailGenre" key={g}>{g}</li>)) : null
                    }
                </ul>
                <p className="detailSummary">{summaryText}</p>    
            </div>
           
        </div>
    )
}


MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
