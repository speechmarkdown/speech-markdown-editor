import React from "react";
import { SectionElement } from "./common/section";

export const NewscasterElement = (props) => {
  return <SectionElement {...props} sections={[{ name: "newscaster" }]} />;
};
