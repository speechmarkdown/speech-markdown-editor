import React from "react";
import { ModifierElement } from "./common/modifier";

export const WhisperElement = (props) => {
  return <ModifierElement {...props} modifiers={[{ name: "whisper" }]} />;
};
