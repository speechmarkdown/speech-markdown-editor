import React from "react";
import { findDOMNode } from "react-dom";
import AutosizeInput from "react-input-autosize";
import { useRef, useImperativeHandle, forwardRef } from "react";

import "./autogrowinput.css";

function AutoGrowInputComponent(props, ref) {
  const { value, onChange, onPrevious, onNext } = props;
  const innerInputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      focus: (end = false) => {
        if (document.activeElement !== findDOMNode(innerInputRef.current)) {
          if (!end) {
            innerInputRef.current.focus();
            innerInputRef.current.setSelectionRange(0, 0);
          } else {
            innerInputRef.current.focus();
            innerInputRef.current.setSelectionRange(
              innerInputRef.current.value.length,
              innerInputRef.current.value.length
            );
          }
        }
      },
    };
  });
  return (
    <AutosizeInput
      className="autogrowinput"
      value={value}
      inputRef={(ref) => (innerInputRef.current = ref)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          console.log("LEFT");
          if (innerInputRef.current.selectionStart === 0) {
            // innerInputRef.current.blur();
            onPrevious();
          }
        } else if (e.key === "ArrowRight") {
          if (
            innerInputRef.current.selectionStart ===
            innerInputRef.current.value.length
          ) {
            // innerInputRef.current.blur();
            onNext();
          }
        }
      }}
      onInput={(e) => {
        onChange(e);
      }}
    />
  );
}

export const AutoGrowInput = forwardRef(AutoGrowInputComponent);
