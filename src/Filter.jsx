import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter(prev => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter(prev => ({ ...prev, rating: e.target.value }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">Filter Movies</h2>
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Filter by title" 
          value={filter.title}
          onChange={handleTitleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select 
          value={filter.rating} 
          onChange={handleRatingChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Ratings</option>
          <option value="1">1+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="4">4+ Stars</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;