import React from "react";
import "./listing.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <button className="btn flex">
          See All <AiOutlineArrowRight className="icon" />
        </button>
      </div>
      <div className="secContainer flex">
        <div className="fund-card">
          <h2>Total Fund</h2>
          <p>$50,000</p>
        </div>

        <div className="gold-card">
          <h2>Total Gold User</h2>
          <p>2,500</p>
        </div>

        <div className="pro-card">
          <h2>Total Pro User</h2>
          <p>5,000</p>
        </div>

        <div className="total-card">
          <h2>Total Users</h2>
          <p>10,000</p>
        </div>
      </div>
      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <AiOutlineArrowRight className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div style={{ display: "flex" }} className="users">
              <img
                src="https://avatars.githubusercontent.com/u/114250830?v=4"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/110231091?v=4"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/112793743?v=4"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/115460430?v=4"
                alt=""
              />
            </div>
            <div className="cardText">
              <span>
                3,25,654 Plan Sold <br />
                <small>
                  621 Plans <span className="date">7 Day</span>
                </small>
              </span>
            </div>
          </div>
          <div className="featuredSellers"></div>
        </div>
        <div className="topSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <AiOutlineArrowRight className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div style={{ display: "flex" }} className="users">
              <img
                src="https://avatars.githubusercontent.com/u/114250830?v=4"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/110231091?v=4"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/112793743?v=4"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/115460430?v=4"
                alt=""
              />
            </div>
            <div className="cardText">
              <span>
                2,25,654 Plan Sold <br />
                <small>
                  24,021 Plans <span className="date">31 Day</span>
                </small>
              </span>
            </div>
          </div>
          <div className="featuredSellers"></div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
