import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <Fragment>
      <h1 style={image}>
        <i className="far fa-frown"></i>
      </h1>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist</p>
      <Link to="/" style={link}>
        Click here to return to home page
      </Link>
    </Fragment>
  );
};

const { image, link } = {
  image: {
    fontSize: "10rem",
    margin: "5rem",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    borderBottom: "1px solid gray",
  },
};

export default Error;
