import React, { useRef, useEffect } from "react";
import { useEditor, ReactEditor, useSelected } from "slate-react";
import { Transforms } from "slate";
import {
  Popover,
  Menu,
  MenuItem,
  MenuDivider,
  InputGroup,
} from "@blueprintjs/core";

import "./common.css";

export const SectionElement = ({ attributes, children, element, sections }) => {
  const editor = useEditor();
  const selected = useSelected();
  const inputRef = useRef(null);

  useEffect(() => {
    if (selected && inputRef && inputRef.current) {
      inputRef.current.focus(editor.lastKeyDown !== "ArrowRight");
    }
  }, [selected]);

  return (
    <span {...attributes} contentEditable={false}>
      #[
      {sections.map((section) => {
        const { name, values } = section;
        return (
          <React.Fragment>
            <span>{name}</span>
            {values && (
              <React.Fragment>
                <span>:</span>
                <Popover
                  content={
                    <Menu>
                      {values.map((value) => {
                        return value ? (
                          <MenuItem
                            text={value}
                            onClick={(e) => {
                              const path = ReactEditor.findPath(
                                editor,
                                element
                              );
                              Transforms.setNodes(
                                editor,
                                { [name]: value },
                                { at: path }
                              );
                            }}
                          />
                        ) : (
                          <React.Fragment>
                            <MenuDivider />
                            <InputGroup
                              placeholder="1s"
                              defaultValue={element[name]}
                              onChange={(e) => {
                                const path = ReactEditor.findPath(
                                  editor,
                                  element
                                );
                                Transforms.setNodes(
                                  editor,
                                  { [name]: e.target.value },
                                  { at: path }
                                );
                              }}
                            />
                          </React.Fragment>
                        );
                      })}
                    </Menu>
                  }
                >
                  {
                    <span className="options">
                      "{element[name] || values[0]}"
                    </span>
                  }
                </Popover>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
      ]{children}
    </span>
  );
};
