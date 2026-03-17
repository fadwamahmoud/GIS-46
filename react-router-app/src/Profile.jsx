import { Outlet, useParams } from "react-router";
import Fadwa from "./Fadwa";
import Batman from "./Batman";
import DefaultProfile from "./DefaultProfile";
import Image from "./Image";
import { useFetchImage } from "./hooks";
import { useEffect, useState } from "react";

const Profile = () => {
  const { name = "default" } = useParams();

  /// request image
  const { imageURL, loading, error } = useFetchImage();

  const [bioText, setBioState] = useState(null);

  // useeffect
  useEffect(() => {
    setTimeout(() => {
      fetch("https://picsum.photos/v2/list", {
        header: {
          "User-Agent": "gis",
        },
      })
        .then((response) => response.json())
        .then((response) =>
          setBioState("This is the bio descripstion of the photo"),
        )
        .catch((err) => console.log(err));
    }, 5000);
  }, []);

  // name
  // hooks => react
  return (
    <div>
      <h1>This is the profile page</h1>

      <h2>The profile visited is: </h2>

      <p>{imageURL && imageURL}</p>
      <Image
        imageURL={imageURL}
        loading={loading}
        error={error}
        bioText={bioText}
      />

      {/* conditional rendering */}
      {name === "fadwa" ? (
        <Fadwa />
      ) : name === "batman" ? (
        <Batman />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
