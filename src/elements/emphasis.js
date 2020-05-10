import React from "react";
import { ModifierElement } from "./common/modifier";

export const EmphasisElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "emphasis", values: ["strong", "moderate"] }]}
    />
  );
};
