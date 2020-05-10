import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import { createEditor, Transforms, Text } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

import {
  AddressElement,
  AudioElement,
  BreakElement,
  CardinalElement,
  CharactersElement,
  DateElement,
  DefaultsElement,
  DisappointedElement,
  DjElement,
  EmphasisElement,
  ExcitedElement,
  ExpletiveElement,
  FractionElement,
  InterjectionElement,
  IpaElement,
  NewscasterElement,
  NumberElement,
  OrdinalElement,
  PhoneElement,
  SubElement,
  TimeElement,
  UnitElement,
  VoiceElement,
  WhisperElement,
} from "../../elements";

import { serializeToSMD } from "../../libs/serialize";

const renderElement = (props) => {
  switch (props.element.type) {
    case "audio":
      return <AudioElement {...props} />;
    case "address":
      return <AddressElement {...props} />;
    case "emphasis":
      return <EmphasisElement {...props} />;
    case "break":
      return <BreakElement {...props} />;
    case "cardinal":
      return <CardinalElement {...props} />;
    case "characters":
      return <CharactersElement {...props} />;
    case "date":
      return <DateElement {...props} />;
    case "defaults":
      return <DefaultsElement {...props} />;
    case "disappointed":
      return <DisappointedElement {...props} />;
    case "dj":
      return <DjElement {...props} />;
    case "excited":
      return <ExcitedElement {...props} />;
    case "expletive":
      return <ExpletiveElement {...props} />;
    case "fraction":
      return <FractionElement {...props} />;
    case "interjection":
      return <InterjectionElement {...props} />;
    case "ipa":
      return <IpaElement {...props} />;
    case "newscaster":
      return <NewscasterElement {...props} />;
    case "number":
      return <NumberElement {...props} />;
    case "ordinal":
      return <OrdinalElement {...props} />;
    case "phone":
      return <PhoneElement {...props} />;
    case "sub":
      return <SubElement {...props} />;
    case "time":
      return <TimeElement {...props} />;
    case "unit":
      return <UnitElement {...props} />;
    case "whisper":
      return <WhisperElement {...props} />;
    case "voice":
      return <VoiceElement {...props} />;
    default:
      return <p {...props.attributes}>{props.children}</p>;
  }
};

const initialValue = [
  {
    children: [
      {
        text: " ",
      },
    ],
  },
];

const withEmbeds = (editor) => {
  editor.isVoid = (element) => !!element.type;
  editor.isInline = (element) => !!element.type;
  return editor;
};

export function EditorComponent(props, ref) {
  const { onChange } = props;
  const [value, setValue] = useState(initialValue);

  const editor = useMemo(() => withEmbeds(withReact(createEditor())), []);

  useImperativeHandle(ref, () => {
    return {
      insert: (node) => {
        let defaultValue = "";
        const fragment = editor.getFragment();
        if (fragment.length === 1) {
          defaultValue = fragment[0].children[0].text;
        }
        if (node.type === "break") {
          defaultValue = undefined;
        }
        const newNode = Object.assign(
          {
            value: defaultValue,
            children: [{ text: " " }],
          },
          node
        );
        Transforms.insertNodes(editor, [
          newNode,
          {
            children: [{ text: " " }],
          },
        ]);
      },
    };
  });

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(value) => {
        setValue(value);
        console.log(value);
        console.log(serializeToSMD(value[0].children));
        onChange(serializeToSMD(value[0].children));
      }}
    >
      <Editable
        onKeyDown={(event) => {
          editor.lastKeyDown = event.key;
        }}
        renderElement={renderElement}
      />
    </Slate>
  );
}

export const Editor = forwardRef(EditorComponent);
