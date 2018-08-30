import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/main.scss";
import Home from "../containers/Home";
import Campuses from "../containers/Campuses";
import Students from "../containers/Students";
import showCampus from "../containers/showCampus";
import NavBar from "./navBar";
import EditCampus from "./views/editCampus";


const Root = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/showCampus" component={showCampus} />
          <Route path="/editCampus" component={EditCampus} />
          <Route path="/" component={Campuses} />
          <Route path="/students" component={Students} />
        </Switch>
       </div>
    </BrowserRouter>
  );
};

export default Root;
