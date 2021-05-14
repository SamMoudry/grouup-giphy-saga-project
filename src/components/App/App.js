import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm.jsx';
import GiphyList from '../GiphyList/GiphyList.jsx';
import Favorites from '../Favorites/Favorites.jsx';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>
        <ul>
          <li>
            <Link to="/search">Search Gifs</Link>
          </li>
          <li>
            <Link to="/favorite">Favorites</Link>
          </li>
        </ul>
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/favorite" component={Favorites} />
      {/* <SearchForm />
      <GiphyList />
      <Favorites /> */}
      </Router>
    </div>
  );
}

export default App;
