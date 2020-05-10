import React from "react";
import { ModifierElement } from "./common/modifier";

export const FractionElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "fraction" }]} />;
};
