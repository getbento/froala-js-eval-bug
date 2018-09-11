import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/entities.min.js';
import 'froala-editor/js/plugins/file.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/image_manager.min.js';
import 'froala-editor/js/plugins/inline_style.min.js';
import 'froala-editor/js/plugins/line_breaker.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/paragraph_style.min.js';
import 'froala-editor/js/plugins/quick_insert.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/url.min.js';
import 'font-awesome/css/font-awesome.css';

import FroalaWrapper from 'FroalaWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showFroala: true };
  }

  toggleFroala() {
    const { showFroala } = this.state;
    this.setState({ showFroala: !showFroala });
  }
  render() {
    const { showFroala } = this.state;
    return (
      <React.Fragment>
        {showFroala && <FroalaWrapper />}
        <button onClick={this.toggleFroala.bind(this)}>{`${
          showFroala ? 'Hide' : 'Show'
        } Froala`}</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
