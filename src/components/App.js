import React, { Component } from 'react';
import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-box">
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;