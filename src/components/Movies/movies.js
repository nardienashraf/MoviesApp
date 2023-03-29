import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './movies.css'
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FavoriteAction, { DeletesAction } from '../../Store/Action/favourite';
import AllDataAction from '../../Store/Action/allData';



const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [moviesPerPage, SetMoviesPerPage] = useState(4);
  const lastMovieIndex = pages * moviesPerPage //1 * 4 = 4 , 2 * 4 = 8, ....
  const firstMovieIndex = lastMovieIndex - moviesPerPage //4 - 4 = 1 (movie) , 8 - 4 = 4 (movie) , .... 
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex); // page 2 => ( 4 , 8 )

  const previousFunc = () => {
    setPages(pages - 1);
  }

  const nextFunc = () => {
    setPages(pages + 1);
  }

  useEffect(() => {
    axiosInstance.get(`/movie/popular?page=${pages}`)
      .then((res) => {
        console.log(res.data.results)
        setMovies(res.data.results)
      }).catch((err) => { console.log(err) })

  }, [pages])



  const dispatch = useDispatch()
  const AllData = useSelector((state) => state.alldata.MovieList)

  useEffect(() => {
    dispatch(AllDataAction())
  }, [])

  const FavData = useSelector((state) => state.favorite.FavoriteMovie);

  const HandleFavorite = (item) => {
    console.log(FavData);
    console.log(AllData);

    AllData.map((movie) => {
      if (movie.id === item.id) {
        dispatch(FavoriteAction({ ...item, Favorite: true }))
        movie.Favorite = true;
      }
      return movie
    })
  }

  return <>
    <div>
      <div className="d-flex justify-content-center bg-dark">
        <div className="container">
          <Row xs={1} md={4} className="g-4 m-4">
            {AllData.map(function (movies) {
              return <div key={movies.id}>
                <div className="d-flex">
                  <div className="col">
                    <Card style={{ width: '15rem' }}>
                      <Link to={`/details/${movies.id}`}><Card.Img className="img-h" variant="top" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} /></Link>
                      <Card.Body>
                        <Card.Title className="h1">{movies.title}</Card.Title>
                        <Card.Text>{movies.release_date}</Card.Text>
                        <Button onClick={() => HandleFavorite(movies)} className='bg-transparent m-3'>
                          <svg
                            width='2em'
                            height='2em'
                            viewBox='0 0 16 014'
                            class='bi bi-heart-fill'
                            fill={(movies.Favorite === true) ? 'red' : 'gray'}
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                            />
                          </svg>
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            })}
          </Row>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger m-2" onClick={() => { previousFunc() }} disabled={pages === 1}>Previous Page</button>
            <button className="btn btn-danger m-2" onClick={() => { nextFunc() }} disabled={pages === 5}>Next Page</button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Movies;