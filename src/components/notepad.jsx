import React, { Component } from "react";
import Note from "/Users/hongzhenzhang/Desktop/CS50 Projects/notepad/src/components/note";
import Textfield from "/Users/hongzhenzhang/Desktop/CS50 Projects/notepad/src/components/textfield.jsx";

class Notepad extends Component {
  state = {
    currentNote: "",
    notes: ["Go to work later today", "Grab Chicken Breast", "Workout"]
  };

  //Handles text field updates
  handleChange = event => {
    this.setState({ currentNote: event.target.value });
    console.log(this.state);
  };

  //Appends current note to the note array
  handleSubmit = e => {
    e.preventDefault();
    const { notes } = this.state;
    let currentNotes = [this.state.currentNote, ...notes];
    this.setState({
      currentNote: "",
      notes: currentNotes
    });
  };

  //Deletes the current
  handleDelete = i => {
    const { notes } = this.state;
    let currentNotes = notes;
    currentNotes.splice(i, 1);
    this.setState({
      notes: currentNotes
    });
  };

  renderNotes = () => {
    const allNotes = this.state.notes.map((note, i) => (
      <Note note={note} key={i} onClick={() => this.handleDelete(i)} />
    ));
    return allNotes;
  };

  render() {
    return (
      <div>
        <h1 className="NoteHeading">
          Welcome to Notepad by <span id="JoeZhang">Joe Zhang</span>
        </h1>
        <Textfield
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          currentNote={this.state.currentNote}
        />
        {this.renderNotes()}
      </div>
    );
  }
}

export default Notepad;
