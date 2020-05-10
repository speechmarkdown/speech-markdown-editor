import React from "react";
import { SectionElement } from "./common/section";

export const DefaultsElement = (props) => {
  return <SectionElement {...props} sections={[{ name: "defaults" }]} />;
};
