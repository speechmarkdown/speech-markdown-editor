import React, { useEffect, useMemo, useState, useCallback } from "react";
import { createEditor, Editor, Transforms, Node } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import { Popover, Button, Menu, MenuItem, Tabs, Tab } from '@blueprintjs/core';

import { SpeechMarkdown } from 'speechmarkdown-js';

import './App.scss';

const speech = new SpeechMarkdown();

const EmphasisElement = props => {
  const { attributes, children, element } = props;
  console.log('LOG', attributes, props);
  const [level, setLevel] = useState(element.level || "strong");
  return (<span contentEditable={false} style={{ userSelect: "none" }}>
    (<span contentEditable={true} {...attributes}>{children}</span>)[emphasis:<Popover content={<Menu>
      <MenuItem text="strong" onClick={e => setLevel('strong')} />
      <MenuItem text="moderate" onClick={e => setLevel('moderate')} />
      <MenuItem text="reduced" onClick={e => setLevel('reduced')} />
    </Menu>}><Button minimal={true} small={true} style={{ paddingLeft: '0', paddingRight: '0' }}>"{level}"</Button></Popover>]
  </span>);
}

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([{
    type: 'paragraph',
    children: [{ text: '' }],
  }]);
  const [alexa, setAlexa] = useState('');
  const [google, setGoogle] = useState('');
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'emphasis':
        return <EmphasisElement {...props} />
      default:
        return <p {...props.attributes}>{props.children}</p>
    }
  }, [])
  const serialize = value => {
    return (
      value
        // Return the string content of each paragraph in the value's children.
        .map(n => {
          if(n.type === 'emphasis'){
            return `(${Node.string(n)})[emphasis:"${n.level}"]`;
          }
          return Node.string(n);
        })
        // Join them all with line breaks denoting paragraphs.
        .join('\n')
    )
  }
  return (
    <div className="root">
      <div className="editor-box">
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
          <div className="toolbar">
            <Popover position="bottom-left" content={<Menu>
              <MenuItem text="emphasis">
                <MenuItem text="strong" onClick={e => {
                  Transforms.setNodes(
                    editor,
                    { type: 'emphasis', level: 'strong' },
                    { match: n => Editor.isBlock(editor, n) }
                  );
                }} />
                <MenuItem text="moderate" onClick={e => {
                  Transforms.setNodes(
                    editor,
                    { type: 'emphasis', level: 'moderate' },
                    { match: n => Editor.isBlock(editor, n) }
                  );
                }} />
                <MenuItem text="reduced" onClick={e => {
                  Transforms.setNodes(
                    editor,
                    { type: 'emphasis', level: 'reduced' },
                    { match: n => Editor.isBlock(editor, n) }
                  );
                }} />
              </MenuItem>
            </Menu>}>
              <Button icon="plus"></Button>
            </Popover>
          </div>
          <div className="editable-container">
            <Editable onKeyDown={event => {
              console.log(value);
              console.log(serialize(value));
              let s = serialize(value);
              setAlexa(speech.toSSML(s, { platform: 'amazon-alexa' }));
              setGoogle(speech.toSSML(s, { platform: 'google-assistant' }))
            }} renderElement={renderElement} />
          </div>
        </Slate>
      </div>
      <div className="preview-box">
        <Tabs>
          <Tab id="alexa" title="Alexa" panel={<div style={{ height: '100px' }}>
            {alexa}
          </div>} />
          <Tab id="google" title="Google" panel={<div style={{ height: '100px' }}>
            {google}
          </div>} />
        </Tabs>
    </div>
    </div>
  )
}



export default App;
