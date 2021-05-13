import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import GiphyList from '../GiphyList/GiphyList.jsx';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm />
      <GiphyList />
    </div>
  );
}

export default App;
