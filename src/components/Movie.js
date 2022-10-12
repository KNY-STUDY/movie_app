import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Movie({id, year, coverImg, title, genres, summary, rating}) {
    let summaryText = summary;
    let titleText = title;
    if(summaryText.length > 187) {
        summaryText = summaryText.substring(0, 184) + "...";
    }
    if(titleText.length > 20) {
        titleText = titleText.substring(0, 18) + "...";
    }
    return (
      
        <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src={coverImg} alt="cover img"  />
            <Card.Body>
                <Card.Title> <Link to={`/movie/${id}`}> {titleText}  </Link></Card.Title>
                <Card.Text>
                    {genres ? genres.map((g) => (<div className="genre" key={g}>{g}</div>)) : null}
                </Card.Text>
                <Card.Text> {year} </Card.Text>
                <Card.Text> {rating} </Card.Text>
                <Card.Text> {summaryText} </Card.Text>
            </Card.Body>
        </Card>
       
    );
};

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string.isRequired
};

export default Movie;