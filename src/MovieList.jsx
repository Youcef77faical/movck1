import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {movies.length === 0 && (
        <div className="col-span-full text-center text-gray-500 py-8">
          No movies found. Add a new movie!
        </div>
      )}
    </div>
  );
};

export default MovieList;