import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/login";

class NavBar extends Component {
  render() {
    return (
      <div className="flex flex-row space-x-6">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/*<Route path="about" element={<About />} />*/}
            {/*<Route path="*" element={<NoMatch />} />*/}
          </Route>
        </Routes>
      </div>
    );
  }
}

export default NavBar;
