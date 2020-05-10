import { Transforms } from "slate";
import { ReactEditor } from "slate-react";

export function moveToNext(editor) {
  Transforms.select(editor, {
    anchor: {
      path: [
        editor.selection.anchor.path[0],
        editor.selection.anchor.path[1] + 1,
      ],
      offset: 0,
    },
    focus: {
      path: [
        editor.selection.anchor.path[0],
        editor.selection.anchor.path[1] + 1,
      ],
      offset: 0,
    },
  });
  ReactEditor.focus(editor);
}

export function moveToPrevious(editor) {
  Transforms.select(editor, {
    anchor: {
      path: [editor.selection.anchor.path[0], editor.selection.anchor.path[1]],
      offset: 0,
    },
    focus: {
      path: [editor.selection.anchor.path[0], editor.selection.anchor.path[1]],
      offset: 0,
    },
  });
  ReactEditor.focus(editor);
}
