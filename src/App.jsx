import { useDebounce } from "react-use";
import { useEffect, useState } from "react"
import Search from "./components/Search"
import HeroCard from "./components/HeroCard"
import Loading from "./components/Loading";
import MovieCard from "./components/MovieCard";


const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  },
};


function App() {

  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');

  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`


      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok) {throw new Error('Faild to fetch movies')};

      const data = await response.json();
      if(data.response === 'false') {
        setErrorMessage(data.error || 'Faild to Fetch Movies');
        setMovieList([]);
        return;
      };

      setMovieList(data.results || []);

    } catch (error) {
      console.log(`Error Fetching Movies: ${error}`);
      setErrorMessage('Error Fetching Movies. Please Try Again Later!');

    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => { 
    fetchMovies(debounceSearchTerm) 
  }, [debounceSearchTerm]);



  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <HeroCard />
          <h1 className="text-[60px]">Find <span className="text-gradient">Movies</span> You'll Enjoy <br /> Without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <section className="all-movies flex flex-col items-center justify-center mt-30">
          {isLoading 
            ? ( <Loading /> ) 
            : errorMessage ? ( <p className="text-[17px] text-red-300">{errorMessage}</p> ) 
            : ( <ul>{ movieList.map( movie => <MovieCard key={movie.id} movie={movie} />) }</ul> ) 
          }
        </section>

      </div>
    </main>
  );
};

export default App