import React, { Component } from "react";
import stl from "./Calendar.module.sass";
import MonthName from "./MonthName/MonthName";
import BodyCalendar from "./BodyCalendar/BodyCalendar";
import CurrentDay from "./CurrentDay/CurrentDay";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class Calendar extends Component {
  state = { m: dayjs(), notes: [] };

  renderMonth() {
    const { m } = this.state;
    const startOf = m.startOf("M").day(0);
    const endOf = m
      .endOf("M")
      .day(6)
      .format("DD MM YY");

    let arrDays = [];
    let i = 0;

    do {
      arrDays.push(startOf.add(i, "day"));
      i++;
    } while (arrDays[arrDays.length - 1].format("DD MM YY") !== endOf);

    return arrDays;
  }

  changeDate = (month, direction) => {
    if (direction === "next") {
      this.setState({ m: this.state.m.add(month, "month") });
    } else {
      this.setState({ m: this.state.m.subtract(month, "month") });
    }
  };

  selectedDay = day => {
    this.setState({ m: day });
  };

  refreshDate = () => {
    this.setState({ m: dayjs() });
  };

  deleteNote = idNote => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== idNote)
    });
  };

  addNote = newNote => {
    console.log(newNote);
    this.setState({ notes: [newNote, ...this.state.notes] });
    this.saveToLocalStorage();
  };

  saveToLocalStorage = () => {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  };

  componentDidMount() {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      this.setState({
        notes: savedNotes
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      this.saveToLocalStorage();
    }
  }

  render() {
    const { m, notes } = this.state;

    return (
      <div className={stl.calendar}>
        <MonthName
          m={m}
          changeDate={this.changeDate}
          refreshDate={this.refreshDate}
        />
        <BodyCalendar
          renderMonth={this.renderMonth()}
          weekDay={weekDay}
          selectedDay={this.selectedDay}
          notes={notes}
          m={m}
        />
        <CurrentDay
          m={m}
          notes={notes}
          addNote={this.addNote}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default Calendar;
