import React, { Component } from "react";

class Textfield extends Component {
  render() {
    return (
      <div>
        <form className="NoteInput" onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label className="NoteLabel" htmlFor="thisNote">
              Make a note:
            </label>
            <input
              type="text"
              className="form-control"
              id="thisNote"
              placeholder="Your note"
              value={this.props.currentNote}
              onChange={this.props.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Note it!
          </button>
        </form>
      </div>
    );
  }
}

export default Textfield;
