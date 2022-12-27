import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This Page Is Not Exist</p>
      <Link to="/">Click Here To Back To The Home Page</Link>
    </div>
  );
};

export default NotFound;
