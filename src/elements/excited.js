import React from "react";
import { ModifierElement } from "./common/modifier";

export const ExcitedElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "excited", values: ["low", "medium", "high"] }]}
    />
  );
};
