import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <h1>Homepage over here</h1>
      <a href="/auth/google">Login</a>
      <a href="/auth/logout">Logout</a>
    </div>
  );
};

export default Home;
