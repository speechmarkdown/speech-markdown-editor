import React from "react";
import { ModifierElement } from "./common/modifier";

export const AddressElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "address" }]} />;
};
