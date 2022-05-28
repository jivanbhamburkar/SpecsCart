import React from "react";
import home from "../images/HomeComp.jpg";

const Home = () => {
  let list = ["Four Frames.", "Three Lenses.", "1Laser."];

  return (
    <>
      <div className="home_main">
        <div className="home_text">
          <h3>Home Trial Cart 2.0</h3>
          <h1>It’s An Experience!</h1>
          <h1>
            {list.map((curr) => {
              return <span>{curr}</span>;
            })}
          </h1>
          <div className="btn">
            <button className="try">Try Now</button>
            <h3 className="new">Watch Whats New!</h3>
          </div>
        </div>
        <div className="home_img">
          <img src={home} alt="" />
        </div>
      </div>
      <div className="home_maintwo">
        <h1 className="head">
          4 frames, 3 lenses, 7 days - direct to your home.
        </h1>
        <p className="para">
          We get it - sometimes you need to hold the glasses in your hand (or
          take a selfie wearing them) to know if they’re made for you
          <br /> or not. With our Free Home Trial, get 4 frames of your choice
          at your home, along with 3 cool lenses.
        </p>
      </div>
    </>
  );
};

export default Home;
