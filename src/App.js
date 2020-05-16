import React, { useRef, useState } from "react";
import { Editor } from "./components/editor/editor";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import { SpeechMarkdown } from "speechmarkdown-js";

import { MenuButton } from "./components/menu";
import { Recent } from "./libs/storage";

import "./App.scss";

const speech = new SpeechMarkdown();

const App = () => {
  const editorRef = useRef(null);
  const [recentItems, setRecentItems] = useState(Recent.get());
  const [alexa, setAlexa] = useState("");
  const [google, setGoogle] = useState("");
  const [bixby, setBixby] = useState("");
  const [plainText, setPlaintext] = useState("");
  return (
    <div className="root">
      <div id="logo">
        <img
          src="https://www.speechmarkdown.org/images/logos/logo-blue.svg"
          alt="Speech Markdown Logo"
        />
      </div>
      <div className="editor-box">
        <div className="toolbar">
          <MenuButton
            onSelect={(node) => {
              editorRef.current.insert(node);
              setRecentItems(Recent.get());
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
        {recentItems.length > 0 && (
          <div className="recents">
            <span>Recent:&nbsp;</span>
            {recentItems.map((recent) => (
              <Tag
                interactive={true}
                onClick={() => {
                  editorRef.current.insert(recent.node);
                }}
                onRemove={(e) => {
                  e.stopPropagation();
                  Recent.remove(recent);
                  setRecentItems(Recent.get());
                }}
              >
                {recent.label}
              </Tag>
            ))}
          </div>
        )}
      </div>
      <div className="preview-box">
        <Tabs>
          <Tab
            id="alexa"
            title="Alexa"
            panel={<div style={{ minHeight: "100px" }}>{alexa}</div>}
          />
          <Tab
            id="google"
            title="Google"
            panel={<div style={{ minHeight: "100px" }}>{google}</div>}
          />
          {/* <Tab
            id="bixby"
            title="Bixby"
            panel={<div style={{ height: "100px" }}>{bixby}</div>}
          /> */}
          <Tab
            id="plaintext"
            title="Plain Text"
            panel={<div style={{ minHeight: "100px" }}>{plainText}</div>}
          />
        </Tabs>
      </div>
    </div>
  );
};

export default App;
