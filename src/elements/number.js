import React from "react";
import { ModifierElement } from "./common/modifier";

export const NumberElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "number" }]} />;
};
