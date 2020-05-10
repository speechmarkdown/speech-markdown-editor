import React, { useRef, useEffect } from "react";
import { useEditor, ReactEditor, useSelected } from "slate-react";
import { moveToNext, moveToPrevious } from "../libs/utils";
import { AutoGrowInput } from "../components/autogrowinput/autogrowinput";
import { Transforms } from "slate";

export const AudioElement = ({ attributes, children, element }) => {
  const editor = useEditor();
  const selected = useSelected();
  const inputRef = useRef(null);
  const { value } = element;

  useEffect(() => {
    if (selected && inputRef && inputRef.current) {
      inputRef.current.focus(editor.lastKeyDown !== "ArrowRight");
    }
  }, [selected]);

  return (
    <span {...attributes} contentEditable={false}>
      !["
      {
        <AutoGrowInput
          value={value}
          onNext={() => {
            moveToNext(editor);
          }}
          onPrevious={() => {
            moveToPrevious(editor);
          }}
          onChange={(e) => {
            const path = ReactEditor.findPath(editor, element);
            Transforms.setNodes(
              editor,
              { value: e.target.value },
              { at: path }
            );
          }}
          ref={inputRef}
        />
      }
      {children}
      "]
    </span>
  );
};
