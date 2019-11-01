import React from "react";
import ReactDOM from "react-dom";
import YoutubeSuggestion from "../YoutubeSuggestion";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<YoutubeSuggestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});
