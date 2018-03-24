import React, { Component } from 'react';
import Remarkable from 'remarkable';

class App extends Component {
  state = {
    source: ''
  };

  md = new Remarkable();

  getHtmlPreview() {
    return { __html: this.md.render(this.state.source) };
  }

  render() {
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Markdown Source</label>
                <div className="control">
                  <textarea
                    className="textarea markdown-input"
                    placeholder="Write your markdown here..."
                    value={this.state.source}
                    onChange={e => this.setState({ source: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">HTML Preview</label>
                <div
                  className="content html-preview"
                  dangerouslySetInnerHTML={this.getHtmlPreview()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
