import React from "react";
import { ModifierElement } from "./common/modifier";

export const DisappointedElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "disappointed", values: ["low", "medium", "high"] }]}
    />
  );
};
