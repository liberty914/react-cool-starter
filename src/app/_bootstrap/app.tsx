import React from "react";
import { RouteProps, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";

import logo from "../../img/logo.svg";
import { ENV } from "./env";
// Import your global styles here
import "../../scss/global.scss";
import "normalize.css/normalize.css";

interface Route {
  route: { routes: RouteProps[] };
}

export const App = ({ route }: Route): JSX.Element => (
  <div className="App">
    <Helmet {...ENV.APP} />
    <Link to="/" className="header">
      <img src={logo} alt="Logo" role="presentation" />
      <h1>
        <em>{ENV.APP.title}</em>
      </h1>
    </Link>
    <hr />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);
