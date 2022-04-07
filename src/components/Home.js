
import React from 'react';
import Movies from './movies';
import Searchform from './searchForm';

const Home = () => {
    return (
      <main>
        <Searchform />
        <Movies />
      </main>
    );
}

export default Home;
