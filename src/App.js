// Public libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// Material UI Customized Style
import { createTheme, ThemeProvider } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
// Private libraries
import Notes from "./pages/notes";
import Create from "./pages/create";
// Global functions
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    
  },
  typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 400,
      fontWeightBold: 500,
    },
});
// Function App - REAL element
function App() {
  // HTML Render
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
// Default element
export default App;
