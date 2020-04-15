import React, { Component } from "react";

class Note extends Component {
  render() {
    const { note } = this.props;
    return (
      <div className="row noteBlock">
        <div className="NoteText col alert alert-primary" role="alert">
          {note}
        </div>
        <div className="col-1">
          <button className="btn btn-danger" onClick={this.props.onClick}>
            <span className="X-button">X</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Note;
