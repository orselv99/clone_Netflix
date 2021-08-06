import React from "react";
import { Banner, Navigator, Row } from "../component";
import { FETCH } from "../service";

export const Main = () => {
  return (
    <div>
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