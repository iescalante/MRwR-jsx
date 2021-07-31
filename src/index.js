// import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create react component
const App = () => {
  const style = { background: "blue", color: "white" };
  const label = "Enter name:";
  const buttonText = { text: "click on me!" };
  return (
    <div>
      <label className="label" htmlFor="name">
        {label}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};
//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// to automatically refresh
if (module.hot) {
  module.hot.accept();
}
