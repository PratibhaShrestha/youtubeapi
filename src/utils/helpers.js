import React from "react";

/**
 * Since the title is encoded html entities, we need to decode it to be plain string.
 * @param {encoded html string} escapedHTML
 */
export const renderHTML = escapedHTML =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: escapedHTML }
  });

/**
 * Formats the date into norwegian format!
 * @param {string date to format} strDate
 */
export const formatDate = strDate => {
  return new Intl.DateTimeFormat("no-NO", {
    year: "numeric",
    month: "numeric",
    day: "numeric",

    hour: "numeric",
    minute: "numeric"
  }).format(new Date(strDate));
};
