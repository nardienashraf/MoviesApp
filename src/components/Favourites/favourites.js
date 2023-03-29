import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { DeletesAction } from "../../Store/Action/favourite";
import { useState } from 'react';
import { Row, Col, Button } from "react-bootstrap";

const FavouriteMovies = () => {
    const [Favmovies, setFavMovies] = useState([])
    const FavData = useSelector((state) => state.favorite.FavoriteMovie)
    useEffect(() => {
        setFavMovies(FavData)
    }, [])
    const dispatch = useDispatch()
    const RemoveFav = (removeMovie) => {
        setFavMovies(
            Favmovies.filter((movie) => {
                if (movie.id === removeMovie.id) {
                    dispatch(DeletesAction({ ...removeMovie, Favorite: false }))
                    return { ...removeMovie, Favorite: false }
                }
                return movie
            })
        )
    }
    return (
        <>
        <div className="container">
            <Row xs={1} md={4} className='g-4 m-4'>
                {
                    FavData.map((item) => {
                        return (
                            <div key={item.id} >
                                <Col>
                                    <Card style={{ width: '15rem' }} className='bg-dark text-white'>
                                        <Card.Img variant="top" src={`https://images.tmdb.org/t/p/w500/${item.poster_path}`} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{`Rating : ${item.vote_average}`}</Card.Text>
                                            <Button variant="btn btn-danger" onClick={() => { RemoveFav(item) }}>Remove</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        )
                    })
                }
            </Row >
        </div >
        </>
    )
}

export default FavouriteMovies;

