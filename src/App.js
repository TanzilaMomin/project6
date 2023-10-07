import React from "react";
import { Emp } from "./components/Emp";
import { MyEmp } from "./components/MyEmp";
import { Registration } from "./components/Registration";
import { Item } from "./components/Items";
import "./components/common.css"
import { Colors } from "./components/Colors";
import { Outline } from "./components/Outline";
import { Signin } from "./components/Signin";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="main">
      {/* <Emp />
      <MyEmp />
      <Registration />
      <Item />
      <Colors />
      <Outline />
      <Signin /> */}
      <Login />
    </div>
  );
}

export default App;
