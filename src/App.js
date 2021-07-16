// Public libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// Private libraries
import Notes from "./pages/notes";
import Create from "./pages/create";
// Function App - REAL element
function App() {
  // HTML Render
  return (
    <Router>
      <Switch>
        {/* Home route */}
        <Route exact path="/">
          <Notes />
        </Route>
        {/* Create route */}
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}
// Default element
export default App;
