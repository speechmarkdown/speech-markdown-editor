import React from "react";
import { ModifierElement } from "./common/modifier";

export const CharactersElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "characters" }]} />;
};
