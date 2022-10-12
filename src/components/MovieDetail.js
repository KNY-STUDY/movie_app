import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./css/Detail.css"


function MovieDetail({url, year, rating, coverImg, title, summary, genres}) {
    let summaryText = summary;
    if(summaryText.length > 1034) {
        summaryText = summaryText.substring(0, 1030) + "...";
    }
    return (
        <Card className="cardDetail">
            <Card.Img  className="coverImg" src={coverImg} alt="cover img"/>
            <Card.Body className="detailInfo">
             <Card.Title className="detailTitle">{title}</Card.Title>
             <ul className="detailGenres detail">
                {
                    genres ? genres.map((g) => (<li className="detailGenre" key={g}>{g}</li>)) : null
                }
            </ul>
             <Card.Text>
                <p className="detailYear detail">{year}</p>
                <p className="detailRating">{rating}</p>
                <p className="detailSummary">{summaryText}</p>
            </Card.Text>
            <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer" >Go To Site</Button>
            </Card.Body>
        </Card>
    );
};

MovieDetail.propTypes = {
    url: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

export default MovieDetail;
