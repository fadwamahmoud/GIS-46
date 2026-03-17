import { Outlet, useParams } from "react-router";
import Fadwa from "./Fadwa";
import Batman from "./Batman";
import DefaultProfile from "./DefaultProfile";

const Profile = () => {
  const { name = "default" } = useParams();
  // name
  // hooks => react
  return (
    <div>
      <h1>This is the profile page</h1>

      <h2>The profile visited is: </h2>

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
