import { React } from "react";

export const renderHTML = escapedHTML =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: escapedHTML }
  });
