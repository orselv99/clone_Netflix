import React from 'react';
import { FETCH } from './service';
import { Navigator, Banner, Row } from './component';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigator />
      <Banner fetchURL={FETCH.topRated} isBackdrop={true} />
      <Row title="Trending" fetchURL={FETCH.trending} isBackdrop={false} />
      <Row title="Top Rated" fetchURL={FETCH.topRated} isBackdrop={true} />
      <Row title="Action" fetchURL={FETCH.action} isBackdrop={true} />
      <Row title="Horror" fetchURL={FETCH.horror} isBackdrop={true} />
      <Row title="Comedy" fetchURL={FETCH.comedy} isBackdrop={true} />
    </div>
  );
}

export default App;