import React, { useRef, useState } from "react";

import { Editor } from "./components/editor/editor";

import { Tabs, Tab } from "@blueprintjs/core";

import { SpeechMarkdown } from "speechmarkdown-js";

import "./App.scss";

import { MenuButton } from "./components/menu";

const speech = new SpeechMarkdown();

const App = () => {
  const editorRef = useRef(null);
  const [alexa, setAlexa] = useState("");
  const [google, setGoogle] = useState("");
  const [bixby, setBixby] = useState("");
  const [plainText, setPlaintext] = useState("");
  return (
    <div className="root">
      <div className="editor-box">
        <div className="toolbar">
          <MenuButton
            onSelect={(node) => {
              editorRef.current.insert(node);
            }}
          />
        </div>
        <div className="editable-container">
          <Editor
            ref={editorRef}
            onChange={(smd) => {
              setAlexa(speech.toSSML(smd, { platform: "amazon-alexa" }));
              setGoogle(speech.toSSML(smd, { platform: "google-assistant" }));
              // setBixby(speech.toSSML(smd, { platform: "samsung-bixby" }));
              setPlaintext(speech.toText(smd));
            }}
          />
        </div>
      </div>
      <div className="preview-box">
        <Tabs>
          <Tab
            id="alexa"
            title="Alexa"
            panel={<div style={{ height: "100px" }}>{alexa}</div>}
          />
          <Tab
            id="google"
            title="Google"
            panel={<div style={{ height: "100px" }}>{google}</div>}
          />
          {/* <Tab
            id="bixby"
            title="Bixby"
            panel={<div style={{ height: "100px" }}>{bixby}</div>}
          /> */}
          <Tab
            id="plaintext"
            title="Plain Text"
            panel={<div style={{ height: "100px" }}>{plainText}</div>}
          />
        </Tabs>
      </div>
    </div>
  );
};

export default App;
