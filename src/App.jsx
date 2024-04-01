import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {StudentForm} from "StudentApp1/StudentForm";


const App = () => (
  <>
    <StudentForm/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
