import React from 'react';
import fetch from './fetch';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Row title="Trending Now" fetchURL={fetch.trending}/>
    </div>
  );
}

export default App;