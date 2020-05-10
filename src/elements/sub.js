import React from "react";
import { ModifierElement } from "./common/modifier";

export const SubElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "sub", values: [false] }]}
    />
  );
};
