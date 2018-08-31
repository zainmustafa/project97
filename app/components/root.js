import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/main.scss";
import Home from "../containers/Home";
import Campuses from "../containers/Campuses";
import Students from "../containers/Students";
import showCampus from "../containers/showCampus";
import showStudent from "../containers/showStudent";
import NavBar from "./navBar";
import EditCampus from "./views/editCampus";
import EditStudent from "./views/editStudent";

const Root = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/showCampus" component={showCampus} />
          <Route path="/showStudent" component={showStudent} />
          <Route path="/editCampus" component={EditCampus} />
          <Route path="/editStudent" component={EditStudent} />
          <Route path="/" exact component={Campuses} />
          <Route path="/students" component={Students} />
        </Switch>
       </div>
    </BrowserRouter>
  );
};

export default Root;
