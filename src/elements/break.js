import React from "react";
import { ModifierElement } from "./common/modifier";

export const BreakElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "break", values: ["none", "x-weak", "weak", false] }]}
    />
  );
};
