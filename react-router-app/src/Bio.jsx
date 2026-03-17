import { useEffect } from "react";
import { useState } from "react";

const Bio = ({ bioText }) => {
  return (
    bioText && (
      <>
        <p>{bioText}</p>;
      </>
    )
  );
};
export default Bio;
