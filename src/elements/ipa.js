import React from "react";
import { ModifierElement } from "./common/modifier";

export const IpaElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "ipa", values: [false] }]}
    />
  );
};
