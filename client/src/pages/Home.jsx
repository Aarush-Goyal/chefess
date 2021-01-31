import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div classNameName="page">
      <div className="header">
        <button className="chef_button">Are You a Chef?</button>
        <button className="login">
          <p className="logintext">Login/Sign Up</p>
        </button>
      </div>
      <div className="main">
        <img src="/mainbgimage.svg" alt="text" className="imgmain" />
        <img src="/chefesslogo.png" alt="text" className="chefesslogo" />
        <p className="subtitle_text"> Homemade goodness in your area</p>
        <div className="searchbar">
          <p className="searchbarcontent">
            Search for your fav chefs, food items
          </p>
          <div className="locate">
            <p className="locatebox">Locate Me</p>
          </div>
        </div>
      </div>
      <div className="chefs">
        <p className="viewall">VIEW ALL</p>
        <p className="topchefs"> Top chefs near you</p>
      </div>
      <div className="card">
        <button className="viewm">
          <p className="vmn">View More</p>
        </button>
        <div className="tags">
          <button className="tagb">
            <p className="tagc"> Indian</p>
          </button>
          <button className="tagd">
            <p className="tage"> Lunch </p>
          </button>
          <button className="tagf">
            <p className="tagg"> Breakfast </p>
          </button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLk4WRjGMK3B5XSE-RWKPbPOpEwH1TwmrXg&usqp=CAU"
            alt="someimg"
            className="imghel"
          />
          <p className="location">Sector 68, City G</p>
          <div className="avatar"></div>
          <p className="minsaway">12 Mins Away</p>
        </div>
        <p className="name">Tina Gupta</p>
      </div>
      <div className="categories">
        <p className="viewal">VIEW ALL</p>
        <p className="topcategories">Explore categories</p>
        <div className="cuisines">
          <img src="/Group_96.svg" alt="som" className="imgcat" />
          <p className="cname">Contemporary</p>
        </div>
      </div>
      <div className="meals">
        <p className="viewalll">VIEW ALL</p>
        <p className="newmeal">Discover A new meal</p>
        <div className="mealsall">
          <img
            className="mealimg"
            alt="some"
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          />
          <p className="headline">Meal 1</p>
          <p className="mealdes">
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
          </p>
        </div>
      </div>
      <div className="coupons">
        <p className="grab">Grab Amazing Deals & Discounts</p>
        <div className="frames"></div>
      </div>
    </div>
  );
};

export default Home;
