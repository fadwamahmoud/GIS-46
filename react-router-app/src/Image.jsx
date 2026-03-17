import { useEffect } from "react";
import { useState } from "react";
import Bio from "./Bio";

const Image = ({ imageURL, loading, bioText, error }) => {
  if (loading) return <p> Loding............</p>;
  if (error) return <p> An error has happened</p>;
  return (
    <>
      <h1> This is an image</h1>
      <div style={{ width: "10px" }}>
        <img src={imageURL} alt={"plaveholder text"} />
      </div>
      <div>
        <Bio bioText={bioText} />
      </div>
    </>
  );
};

export default Image;
