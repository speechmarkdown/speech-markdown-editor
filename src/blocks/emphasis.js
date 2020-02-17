import React from 'react';
import { Popover, Menu, MenuItem, Button } from '@blueprintjs/core';

export const EmphasisNode = props => {
    return (
      <pre {...props.attributes}>
        <div contentEditable={false}><input type="text" /></div>
        {props.children}
      </pre>
    )
  }