import React, { Component } from 'react';
import Previewer from './Previewer';

class Editor extends Component {
  render() {
    const { input, handleChange } = this.props;

    return (
      <div className="editor-box">
        <form className="editor-label-container">
          <label
            htmlFor="editor"
            className="editor-label"
            tabIndex="0">
              Editor
          </label>
          <textarea
            id="editor"
            name="editor"
            rows="10"
            cols="3"
            value={input}
            onChange={handleChange}>
          </textarea>
        </form>
        <Previewer
          input={input}
        />
      </div>
    );
  }
}

export default Editor;