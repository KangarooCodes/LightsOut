import React, {Fragment} from "react";
import Board from "./Board";
import "./App.css";
import Title from "./Title";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <Fragment>
        <h3 className="title"><Title/></h3>        
        <Board/>
      </Fragment>
  );
}

export default App;
