import React from "react";
import { ModifierElement } from "./common/modifier";

const modifiers = [
  {
    name: "voice",
    values: [
      "Ivy",
      "Joanna",
      "Joey",
      "Justin",
      "Kendra",
      "Kimberly",
      "Matthew",
      "Salli",
      "Nicole",
      "Russell",
      "Amy",
      "Brian",
      "Emma",
      "Aditi",
      "Raveena",
      "Hans",
      "Marlene",
      "Vicki",
      "Conchita",
      "Enrique",
      "Carla",
      "Giorgio",
      "Mizuki",
      "Takumi",
      "Celine",
      "Lea",
      "Mathieu",
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
