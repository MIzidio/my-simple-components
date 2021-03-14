import React from "react";
import ReactDOM from "react-dom";
import Button from "../src";

const App = () => (
  <Button onClick={() => console.log("Está dando certo")}>
    My Simple Components
  </Button>
);

ReactDOM.render(<App />, document.getElementById("root"));
