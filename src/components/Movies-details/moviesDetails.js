import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from "react";
import axiosInstance from "../../axiosConfig/instance";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './moviesDetails.css';

const MoviesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({})
  useEffect(() => {
    axiosInstance.get(`/movie/${id}`)
      .then((res) => {
        console.log(res.data)
        setDetails(res.data)
      }).catch((err) => { console.log(err) })
  }, [id])

  return (
    <div>
      <Row className="container-fluid mt-4">
        <Col xs={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
          </Card>
        </Col>
        <Col xs={9}>
          <h1>{details.title}</h1>
          <p>{details.release_date}</p>
          <p>{details.tagline}</p>
          <p>{details.overview}</p>
        </Col>
      </Row>
    </div>
  )
}

export default MoviesDetails;