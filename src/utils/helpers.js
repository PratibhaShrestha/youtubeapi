import React from "react";

export const renderHTML = escapedHTML =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: escapedHTML }
  });

export const formatDate = strDate => {
  return new Intl.DateTimeFormat("no-NO", {
    year: "numeric",
    month: "numeric",
    day: "numeric",

    hour: "numeric",
    minute: "numeric"
  }).format(new Date(strDate));
};
