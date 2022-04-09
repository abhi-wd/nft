import React from "react";
import CollectionCard from "./CollectionCard";
import "./shayriList.css";

const ShayriList = ({ shayriData, setselectedShayri }) => {
  // console.log(shayriData);
  return (
    <div className="shayriList">
      {shayriData.map((shayri) => (
        <div onClick={() => setselectedShayri(shayri.token_id)}>
          <CollectionCard
            key={shayri.token_id}
            id={shayri.token_id}
            name={shayri.name}
            traits={shayri.traits}
            image={shayri.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default ShayriList;
