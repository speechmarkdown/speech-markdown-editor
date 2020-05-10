import React from "react";
import { ModifierElement } from "./common/modifier";

export const InterjectionElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "interjection" }]} />;
};
