import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

function Detail () {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);


    // const getMovies = async () => {
    //     const json = await (
    //         await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    //       ).json();
    //       console.log(json);
    // };

    // useEffect ( () => {
    //     getMovies();
    // }, []);

   
    const getMovieInfo = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieInfo(json.data.movie);
        setLoading(false);
    };

   
    
    useEffect(() => {
        setLoading(true);
        getMovieInfo();
    }, []); //여기

    return (
        loading
        ? <div className='loadingWrapper'><h1 className="loading">Loading....</h1></div>
        : <MovieDetail
            coverImg={movieInfo.medium_cover_image}
            title={movieInfo.title_long}
            summary={movieInfo.description_full} 
            genres={movieInfo.genres}/>
    );
}

export default Detail;