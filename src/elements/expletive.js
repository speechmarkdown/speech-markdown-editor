import React from "react";
import { ModifierElement } from "./common/modifier";

export const ExpletiveElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "expletive" }]} />;
};
