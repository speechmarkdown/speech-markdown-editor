import React from "react";
import { ModifierElement } from "./common/modifier";

const modifiers = [
  {
    name: "voice",
    values: [
      "Ivy (en-US)",
      "Joanna (en-US)",
      "Joey (en-US)",
      "Justin (en-US)",
      "Kendra (en-US)",
      "Kimberly (en-US)",
      "Matthew (en-US)",
      "Salli (en-US)",
      "Nicole (en-AU)",
      "Russell (en-AU)",
      "Amy (en-GB)",
      "Brian (en-GB)",
      "Emma (en-GB)",
      "Aditi (en-IN)",
      "Raveena (en-IN)",
      "Hans (de-DE)",
      "Marlene (de-DE)",
      "Vicki (de-DE)",
      "Conchita (es-ES)",
      "Enrique (es-ES)",
      "Carla (it-IT)",
      "Giorgio (it-IT)",
      "Mizuki (ja-JP)",
      "Takumi (ja-JP)",
      "Celine (fr-FR)",
      "Lea (fr-FR)",
      "Mathieu (fr-FR)",
    ],
  },
  {
    name: "lang",
    values: [false],
  },
  {
    name: "pitch",
    values: ["x-low", "low", "medium", "high", "x-high"],
  },
  {
    name: "rate",
    values: ["x-slow", "slow", "medium", "fast", "x-fast"],
  },
  {
    name: "volume",
    values: ["silent", "x-soft", "soft", "medium", "loud", "x-loud"],
  },
];

export const VoiceElement = (props) => {
  return <ModifierElement {...props} modifiers={modifiers} />;
};
