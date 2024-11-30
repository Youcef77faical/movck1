import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      onAddMovie({
        ...newMovie,
        rating: parseFloat(newMovie.rating)
      });
     
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">Add New Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={newMovie.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24"
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          min="0"
          max="5"
          step="0.1"
          value={newMovie.rating}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button 
          type="submit" 
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;