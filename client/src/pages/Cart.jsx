import React from "react";
import "./Cart.css"
const Cart = () => {
  return (
    <div className="cart">
      <div className="auto-flex2">
        <div className="auto-flex">
          <img
            className="chefesslogo-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/chefesslogo-2@2x.png"
          />
          <div className="overlap-group">
            <img
              className="search-bar-default"
              onclick=""
              src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/search-bar-default-3@2x.svg"
            />
            <div className="button-pri-ry-default" onclick="">
              <div className="frame-2">
                <div className="search valign-text-middle biryani-semi-bold-white-18px">
                  SEARCH
                </div>
              </div>
            </div>
          </div>
          <div className="community valign-text-middle biryani-semi-bold-cherry-22px">
            Community
          </div>
          <img
            className="rectangle"
            src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/rectangle-1@2x.svg"
          />
          <div className="user-24px">
            <img
              className="ellipse"
              src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/ellipse@2x.svg"
            />
            <img
              className="intersect"
              src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/intersect@2x.svg"
            />
          </div>
        </div>
        <img
          className="line-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/line-2-1@1x.svg"
        />
        <div className="auto-flex1">
          <h1 className="your-cart valign-text-middle biryani-bold-eerie-black-40px">
            Your Cart
          </h1>
          <div className="your-total valign-text-middle biryani-semi-bold-eerie-black-36px">
            Your Total
          </div>
        </div>
      </div>
      <div className="auto-flex4">
        <div className="auto-flex3">
          <div className="card-resta-nt-default manatee-border-0-8px">
            <div className="auto-flex-1">
              <div className="amazing-starter valign-text-middle biryani-semi-bold-black-22px">
                Amazing Starter
              </div>
              <div className="text-1 valign-text-middle biryani-semi-bold-abbey-18px">
                By Chef
                Ritu&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Qty: 1
              </div>
            </div>
            <div className="price valign-text-middle biryani-semi-bold-black-28px">
              $ 20.00
            </div>
          </div>
          <div className="card-resta-nt-default-1 manatee-border-0-8px">
            <div className="auto-flex1-1">
              <div className="luscious-lunch valign-text-middle biryani-semi-bold-black-22px">
                Luscious Lunch
              </div>
              <div className="text-2 valign-text-middle biryani-semi-bold-abbey-18px">
                By Chef
                Durga&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Qty: 1
              </div>
            </div>
            <div className="price-1 valign-text-middle biryani-semi-bold-black-28px">
              $ 40.00
            </div>
          </div>
          <div className="card-resta-nt-default-2 manatee-border-0-8px">
            <div className="auto-flex5">
              <div className="delicious-dessert valign-text-middle biryani-semi-bold-black-22px">
                Delicious Dessert
              </div>
              <div className="text-3 valign-text-middle biryani-semi-bold-abbey-18px">
                By Chef
                Tina&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Qty: 1
              </div>
            </div>
            <div className="price-2 valign-text-middle biryani-semi-bold-black-28px">
              $ 20.00
            </div>
          </div>
        </div>
        <div className="text-4 valign-text-middle">
          <span>
            <span className="span1">
              Order
              Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
              80.00
              <br />
              Taxes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              + $ 4.00
              <br />
              Delivery
              Fee&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              + $ 5.00
              <br />
              Discounts
              Applied&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              - $ 12.00
              <br />
              _______________________________
              <br />
            </span>
            <span className="span">&nbsp;&nbsp;</span>
            <span className="span3">Grand Total&nbsp;&nbsp;</span>
            <span className="span">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
              73.00{" "}
            </span>
          </span>
        </div>
      </div>
      <div className="button-pri-ry-default-1" onclick="">
        <div className="frame-2-1">
          <div className="proceed-to-payment valign-text-middle">
            PROCEED TO PAYMENT
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="auto-flex11">
          <div className="columns">
            <div className="table">
              <div className="link-01 biryani-bold-eerie-black-20px">
                Chefess
              </div>
              <div className="link-01-2 biryani-normal-white-16px">
                About Us
              </div>
              <div className="link-01-3 biryani-normal-white-16px">
                Human Resources
              </div>
              <div className="link-01-4 biryani-normal-white-16px">
                For Chefs
              </div>
              <div className="link-01-5 biryani-normal-white-16px">
                Contact Us
              </div>
            </div>
            <div className="stay-in-loop">
              <div className="link-01-6 biryani-bold-eerie-black-20px">
                Stay in Loop
              </div>
              <div className="link-01-7 biryani-normal-white-16px">
                Our Blog
              </div>
              <div className="link-01-8 biryani-normal-white-16px">
                Press Releases
              </div>
              <div className="link-01-9 biryani-normal-white-16px">
                Email Newsletter
              </div>
              <div className="link-4"></div>
            </div>
            <div className="let-us-help-you">
              <div className="link-01-10 biryani-bold-eerie-black-20px">
                Let Us Help You
              </div>
              <div className="link-01-11 biryani-normal-white-16px">FAQs</div>
              <div className="link-01-1 biryani-normal-white-16px">
                Customer Care
              </div>
              <div className="link-01-12 biryani-normal-white-16px">
                Partner with Us
              </div>
              <div className="link-01-1 biryani-normal-white-16px">
                Developer Info
              </div>
            </div>
          </div>
          <div className="auto-flex10">
            <div className="auto-flex9">
              <div className="follow-us valign-text-middle biryani-bold-eerie-black-22px">
                Follow Us!
              </div>
              <img
                className="vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/vector-91@2x.svg"
              />
              <div className="instagram">
                <img
                  className="vector-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/vector-93@2x.svg"
                />
              </div>
              <img
                className="vector-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/vector-103@2x.svg"
              />
            </div>
            <div className="auto-flex8">
              <div className="join-our-newsletter valign-text-middle biryani-bold-eerie-black-22px">
                Join Our Newsletter
              </div>
              <img
                className="search-bar-default-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/60167abff78fa590493fb6ee/releases/60167e4761c5c6a19e304ed0/img/search-bar-default-1@2x.svg"
              />
            </div>
          </div>
        </div>
        <div className="auto-flex7">
          <div className="separator"></div>
          <div className="auto-flex6">
            <div className="terms-of-service biryani-normal-white-16px">
              Terms of Service
            </div>
            <div className="text-5 valign-text-middle biryani-normal-white-16px">
              •
            </div>
            <div className="privacy-policy biryani-normal-white-16px">
              Privacy Policy
            </div>
            <div className="text-6 valign-text-middle biryani-normal-white-16px">
              © 2021
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
