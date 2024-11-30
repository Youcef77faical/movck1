import React, { useState } from 'react';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import MovieList from './MovieList.JSx';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "disney movie",
      description: "Moana 2 reunites Moana and Maui three years later for an expansive new voyage alongside a crew of unlikely seafarers",
      posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_moana2_payoff_5787a994.jpeg",
      rating: 4.8
    }
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: ''
  });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    (filter.rating === '' || movie.rating >= parseFloat(filter.rating))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Movie Collection</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <AddMovieForm onAddMovie={handleAddMovie} />
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="md:col-span-2">
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
}

export default App;