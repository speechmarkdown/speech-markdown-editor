import React from "react";
import { ModifierElement } from "./common/modifier";

export const UnitElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "unit" }]} />;
};
