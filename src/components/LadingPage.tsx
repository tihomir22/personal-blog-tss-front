import React, { useEffect } from "react";
import "./LandingPage.css";

import Navabar from "./Navbar/Navabar";
import ContenidoLandingPage from "./ContenidoLandingPage/ContenidoLandingPage";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Blog/Blog";
import Editor from "./Editor/Editor";
import PostViewer from "./Blog/PostViewer/PostViewer";

function LandingPage() {
  return (
    <div>
      <Navabar />
      <Router>
        <Switch>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:slug" component={PostViewer}></Route>
          <Route path="/editor" exact>
            <Editor />
          </Route>
          <Route path="/">
            <ContenidoLandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default LandingPage;
