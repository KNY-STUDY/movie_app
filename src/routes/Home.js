import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Movie from "../components/Movie";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";


function Home () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    const params = useParams();
    const sort = params.sort;
    const query = sort === "/" ? "date_added" : sort;
    console.log(sort)

    const getMovies = async() => {
        
        const json = await (
            await fetch (
              `https://yts.mx/api/v2/list_movies.json?sort_by=${query}`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, [query]);   

    
    return (
        <Container>
            <Row>
                <Col>
                    {loading ? (
                        <Spinner animation="border" variant="light" />
                    ) : (
                    
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image} 
                                title={movie.title} 
                                year={movie.year}
                                summary={movie.summary} 
                                rating={movie.rating}
                                genres={movie.genres}
                            />
                            )
                        )}
                    </div>
                    )} 
                </Col>
            </Row>
        </Container>
    ); 
}

export default Home;
