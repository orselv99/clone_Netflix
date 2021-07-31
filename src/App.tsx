import React from 'react';
import fetch from './fetch';
import { Menu, Banner, Row } from './component';

function App() {
  return (
    <div className="App">
      <h1>NerdFlix</h1>
      <Menu />
      <Banner />
      <Row title="Trending" fetchURL={fetch.trending} isBackdrop={false} />
      <Row title="Top Rated" fetchURL={fetch.topRated} isBackdrop={true} />
      <Row title="Action" fetchURL={fetch.action} isBackdrop={true} />
      <Row title="Horror" fetchURL={fetch.horror} isBackdrop={true} />
      <Row title="Comedy" fetchURL={fetch.comedy} isBackdrop={true} />
    </div>
  );
}

export default App;