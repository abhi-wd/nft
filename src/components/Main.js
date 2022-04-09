import React from "react";
import instagramLogo from "../assests/owner/instagram.png";
import twitterLogo from "../assests/owner/twitter.png";
import moreIcon from "../assests/owner/more.png";
import "./Main.css";
import { useState, useEffect } from "react";

const Main = ({ shayriData, selectedShayri }) => {
  const [activeShayri, setactiveShayri] = useState(shayriData[0]);
  console.log(activeShayri);
  useEffect(() => {
    setactiveShayri(shayriData[selectedShayri]);
  }, [shayriData, selectedShayri]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activeShayri.image_url} alt="" />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activeShayri.name}
            <span className="itemNumber">.#{activeShayri.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeShayri.image_url} alt="Owner Image" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeShayri.owner.address}</div>
                <div className="ownerHandle">@hotboy</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
