import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>This route does not exist</h1>
      <Link to="/"> Go back to main page</Link>
    </div>
  );
};

export default ErrorPage;
