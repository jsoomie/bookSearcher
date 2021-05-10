import { Link } from "react-router-dom";
import { List, ListItems, Heading } from "../";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <Heading className="header" color="white">
          <Link to="/">Book Searcher</Link>
        </Heading>
        <List className="header-list-container">
          <ListItems>
            <Link to="/"> Search</Link>
          </ListItems>
          <ListItems>
            <Link to="/saved"> Saved Books </Link>
          </ListItems>
        </List>
      </div>
    </div>
  );
};

export default Header;
