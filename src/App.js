import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components//Footer/Footer";
import MoviesList from "./Components/MoviesList/MoviesList";
import './App.css';
import { moviesData } from "./constants/data";
import BasicModal from "./Components/AddMovie/AddMovie";


function App() {
  const [movies,setMovies ] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);
 
  const addMovie= (movie)=>setMovies([...movies, movie]);

  return (
    <div>
       <Navbar setSearchTitle={setSearchTitle} 
       setSearchRating={setSearchRating}
       searchRating={searchRating}/>

       <BasicModal addMovie={addMovie}/>
       <MoviesList movies={movies} searchTitle={searchTitle}  searchRating={searchRating}/>
       <Footer/>
       
    </div>
  );
}

export default App;

