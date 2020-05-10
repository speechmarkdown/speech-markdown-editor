import React from "react";
import { ModifierElement } from "./common/modifier";

export const TimeElement = (props) => {
  return (
    <ModifierElement
      {...props}
      modifiers={[{ name: "time", values: ["hms12", "hms24"] }]}
    />
  );
};
