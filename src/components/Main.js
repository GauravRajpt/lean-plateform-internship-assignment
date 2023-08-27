import React from "react";
import rocket from "../helper/rocket.png";
import mobile from "../helper/mobile.png";
import amazon from "../helper/amazon.png";
import spotify from "../helper/spotify.png";
import meta from "../helper/meta.png";
import alisa from "../helper/alisa.png";
import lee from "../helper/lee.png";
import michel from "../helper/michel.png";
function Main() {
  return (
    <section>
      <div className="main-poster">
        <div className="headings">
          <img src={rocket} alt="rocket" />
          <h1>Grow Faster Together</h1>
          <h2>
            Find a mentor or Lead the path for someone
            <br />
            It’s a win win!
          </h2>
          <div className="poster-btn">
            <h3>Find a Mentor</h3>
            <h3>Become a Mentor</h3>
          </div>
        </div>
        <div className="mobileImg">
          <img src={mobile} alt="mobile" />
        </div>
      </div>

      {/** experties section starts here */}

      <div className="experties-section">
        <h3>Find the expertises from </h3>
        <div className="companies">
          <img src={amazon} alt="companiesLogo" />
          <img src={spotify} alt="companiesLogo" />
          <img src={meta} alt="companiesLogo" />
        </div>
        <h3>Make your career growth in</h3>
        <div className="experties">
          <div className="ui-ux">UX/UI Design</div>
          <div className="product-management">Product Management</div>
          <div className="marketing">Marketing</div>
          <div className="datascience">Data Science</div>
        </div>
      </div>

      {/** comments section starts here */}

      <div className="clients-Comment">
        <h3>What our Clients says about us</h3>
        <div className="comments">
          <div>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatu
            </h3>
            <div>
              <h2>Alisa</h2>
            </div>
            <img className="commenters" src={alisa} alt="alisha" />
            <div className="title">
            Founder,XOXO
            </div>
          </div>

          <div>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatu
            </h3>
            <div>
              <h2>Michel</h2>
            </div>
            <img className="commenters" src={michel} alt="michel" />
            <div className="title">Manager,QWERTY
            </div>
          </div>

          <div>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatu
            </h3>
            <div>
              <h2>Lee cooper</h2>
            </div>
            <img className="commenters" src={lee} alt="lee" />
            <div className="title">HR Director, Meta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
