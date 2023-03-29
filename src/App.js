import './App.css';
import Header from './components/Header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Movies from './components/Movies/movies';
import MoviesDetails from './components/Movies-details/moviesDetails';
import FavouriteMovies from './components/Favourites/favourites';


function App() {
  return (
   <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/favmovies' element={<FavouriteMovies/>}/>
        <Route path='/details/:id' element={<MoviesDetails/>}/>
      </Routes>
   </>
  );
}

export default App;
