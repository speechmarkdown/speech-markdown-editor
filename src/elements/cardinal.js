import React from "react";
import { ModifierElement } from "./common/modifier";

export const CardinalElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "cardinal" }]} />;
};
