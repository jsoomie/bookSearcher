import "./App.css";
import { Search, Saved, Error } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header here */}
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Error />
          </Route>
        </Switch>
        {/* Footer here */}
      </Router>
    </div>
  );
}

export default App;
