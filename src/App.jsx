import React, {useState, useEffect} from 'react';
import { Container, Button, Stack, useMediaQuery } from "@chakra-ui/react"
import { Header, Hero, MovieSet, Search } from './components';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f2847ae1"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies]= useState([])

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };


  return (
    <Container
    bgColor='white'
maxW= {["container.sm", "container.lg", "container.xl"]}
     position="relative"
   margin="0"
   padding="0"
   
      >
<Header/>
<Hero/>
<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
{/* <MovieSet movies={movies}/> */}
    </Container>
  )
}

export default App