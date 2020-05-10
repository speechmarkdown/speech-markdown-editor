import React from "react";
import { ModifierElement } from "./common/modifier";

export const OrdinalElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "ordinal" }]} />;
};
