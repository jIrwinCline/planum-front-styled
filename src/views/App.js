
import React from "react";

import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";
import axios from "axios";
// reactstrap components

//REDUX
import { Provider } from "react-redux";
import store from "../redux/store";
import { SET_AUTHENTICATED } from "../redux/types";
import { logoutUser } from "../redux/actions/userActions";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";
import AuthRoute from "../util/AuthRoute";
//pages
import home from '../pages/home';
import login from '../pages/login';
import products from '../pages/products';
import retreats from "../pages/retreats";
import tarot from "../pages/tarot";

import ProfilePage from "views/examples/ProfilePage.js";
// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
//Router
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";



// const theme = createMuiTheme(themeFile);

axios.defaults.baseURL =
  "https://us-central1-planum-magic.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
  }
}
function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    // <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <div className="main">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/products" component={products} />
            <Route exact path="/retreats" component={retreats} />
            <Route exact path="/tarot" component={tarot} />
            <Route
              path="/artist"
              render={props => <ProfilePage {...props} />}
            />
            <AuthRoute path="/login" component={login} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
    // </MuiThemeProvider>
  );
}

export default App;
