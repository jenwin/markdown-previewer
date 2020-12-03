import React, { Component } from 'react';
import marked from '../../node_modules/marked';

class Previewer extends Component {
  render() {
    const { txtPrev } = this.props;

    return (
      <div>
        <div className="preview-label">
          <p className="preview-title" tabIndex="0">Preview</p>
        </div>
          <div
            id="preview"
            tabIndex="0"
            dangerouslySetInnerHTML={{__html:marked(txtPrev)}}>
          </div>
      </div>
    );
  }
}

export default Previewer;