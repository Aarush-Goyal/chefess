import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <h1>Homepage over here</h1>
      <Link to="/login"> </Link>
    </div>
  );
};

export default Home;
