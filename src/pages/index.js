import * as React from "react";
import "../assets/stylesheets/application.scss";
import {Header} from '../components/header';
import HeroBanner from '../components/heroBanner';

const IndexPage = () => {
  return (
    <div className="body-wrap">
      <Header />
      <HeroBanner />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
