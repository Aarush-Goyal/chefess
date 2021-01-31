import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="page">
      <div class="header">
        <button class="chef_button">Are You a Chef?</button>
        <button class="login">
          <p class="logintext">Login/Sign Up</p>
        </button>
      </div>
      <div class="main">
        <img src="/mainbgimage.svg" alt="text" class="imgmain" />
        <img src="/chefesslogo.png" alt="text" class="chefesslogo" />
        <p class="subtitle_text"> Homemade goodness in your area</p>
        <div class="searchbar">
          <p class="searchbarcontent">Search for your fav chefs, food items</p>
          <div class="locate">
            <p class="locatebox">Locate Me</p>
          </div>
        </div>
      </div>
      <div class="chefs">
        <p class="viewall">VIEW ALL</p>
        <p class="topchefs"> Top chefs near you</p>
      </div>
      <div class="card">
        <button class="viewm">
          <p class="vmn">View More</p>
        </button>
        <div class="tags">
          <button class="tagb">
            <p class="tagc"> Indian</p>
          </button>
          <button class="tagd">
            <p class="tage"> Lunch </p>
          </button>
          <button class="tagf">
            <p class="tagg"> Breakfast </p>
          </button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLk4WRjGMK3B5XSE-RWKPbPOpEwH1TwmrXg&usqp=CAU"
            alt="someimg"
            class="imghel"
          />
          <p class="location">Sector 68, City G</p>
          <div class="avatar"></div>
          <p class="minsaway">12 Mins Away</p>
        </div>
        <p class="name">Tina Gupta</p>
      </div>
      <div class="categories">
        <p class="viewal">VIEW ALL</p>
        <p class="topcategories">Explore categories</p>
        <div class="cuisines">
          <img src="/Group_96.svg" alt="som" class="imgcat" />
          <p class="cname">Contemporary</p>
        </div>
      </div>
      <div class="meals">
        <p class="viewalll">VIEW ALL</p>
        <p class="newmeal">Discover A new meal</p>
        <div class="mealsall">
          <img
            class="mealimg"
            alt="some"
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          />
          <p class="headline">Meal 1</p>
          <p class="mealdes">
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
          </p>
        </div>
      </div>
      <div class="coupons">
        <p class="grab">Grab Amazing Deals & Discounts</p>
        <div class="frames"></div>
      </div>
    </div>
  );
};

export default Home;
