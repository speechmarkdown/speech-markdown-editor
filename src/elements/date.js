import React from "react";
import { ModifierElement } from "./common/modifier";

export const DateElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "date", values: ["mdy", "dmy", "ymd"] }]}
    />
  );
};
