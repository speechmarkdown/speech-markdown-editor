import React, { useRef, useEffect, useState } from "react";
import { useEditor, ReactEditor, useSelected } from "slate-react";
import { moveToNext, moveToPrevious } from "../../libs/utils";
import { AutoGrowInput } from "../../components/autogrowinput/autogrowinput";
import { Transforms } from "slate";
import {
  Popover,
  Menu,
  MenuItem,
  MenuDivider,
  InputGroup,
} from "@blueprintjs/core";

import "./common.css";

export const ModifierElement = ({
  attributes,
  children,
  element,
  modifiers,
}) => {
  const editor = useEditor();
  const selected = useSelected();
  const inputRef = useRef(null);
  const [availableModifier, setAvailableModifier] = useState([]);

  let { value } = element;

  useEffect(() => {
    if (selected && inputRef && inputRef.current) {
      inputRef.current.focus(editor.lastKeyDown !== "ArrowRight");
    }
  }, [selected]);

  useEffect(() => {
    if (modifiers.length == 1) {
      setAvailableModifier(modifiers);
    } else {
      setAvailableModifier(
        modifiers.filter((modifier) => element[modifier.name] !== undefined)
      );
    }
  }, [modifiers, element]);

  return (
    <span {...attributes} contentEditable={false}>
      {value !== undefined && (
        <React.Fragment>
          (
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
          )
        </React.Fragment>
      )}
      [
      {availableModifier.map((modifier, index) => {
        const { name, values } = modifier;
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
                {index < availableModifier.length - 1 && ";"}
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
      ]{children}
    </span>
  );
};
