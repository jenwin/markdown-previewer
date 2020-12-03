import React, { Component } from 'react';
import Previewer from './Previewer';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '<h1>Welcome to the Markdown Previewer!</h1>\
              <h2>Here are some examples.</h2>\
              <p>I am a paragraph.</p>\
              <a href="#">I am a link that goes nowhere.</a>\
              <br><br><code>let dog = "Max";</code>\
              <blockquote>"I am a set of quotes."</blockquote>\
              <h4>A list of animals:</h4>\
              <ol>\
              <li>Cats</li>\
              <li>Dogs</li>\
              <li>Dinosaurs</li>\
              </ol>\
              <br>I am <strong>bold.</strong>\
              <br><br>I am <em>italicized.</em>\
              <br><br>I am <u>underlined</u>.'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div className="editor-box">
        <form className="editor-label-container">
          <label htmlFor="editor" className="editor-label" tabIndex="0">Editor</label>
            <textarea
              id="editor"
              name="editor"
              rows="10"
              cols="3"
              value={this.state.input}
              onChange={this.handleChange}>
          </textarea>
        </form>
        <div className="preview-box">
          <Previewer
            txtPrev={this.state.input}
          />
        </div>
      </div>
    );
  }
}

export default Editor;