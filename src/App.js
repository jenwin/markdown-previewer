import React, { Component } from 'react';
import Editor from './components/Editor';

class App extends Component {
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
    const value = e.target.value;
    this.setState({
      input: value
    });
  }

  render() {
    const { input } = this.state;

    return (
      <div className="text-box">
        <Editor
          input={input}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;