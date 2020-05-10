import React from "react";
import { ModifierElement } from "./common/modifier";

export const PhoneElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "phone", values: [false] }]}
    />
  );
};
