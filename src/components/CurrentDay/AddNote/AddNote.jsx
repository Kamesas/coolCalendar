import React, { Component } from "react";

class AddNote extends Component {
  state = {
    id: null,
    date: this.props.m,
    time: null,
    color: "#999BF4",
    title: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = e => {
    e.preventDefault();

    const newNote = {
      id: new Date(),
      date: this.props.m.format("DD MM YYYY"),
      time: this.props.m.format("HH:MM"),
      title: this.state.title,
      //descr: this.state.descr,
      color: this.state.color
    };

    if (this.state.title === "") {
      alert("Напишите заголовок заметки");
    } else {
      this.props.addNote(newNote);
      alert("Сохранено");
      this.resetAddForm();
    }
  };

  resetAddForm() {
    this.setState({
      title: "",
      //descr: "",
      time: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.addNote}>
        <input
          type="text"
          name="title"
          placeholder="Add new note"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default AddNote;
