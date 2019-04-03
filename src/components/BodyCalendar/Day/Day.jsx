import React, { Component } from "react";
import stl from "./Day.module.sass";
import dayjs from "dayjs";

class Day extends Component {
  selectedDay = day => {
    this.props.selectedDay(day);
  };

  render() {
    const { day, notes } = this.props;
    let cls = [stl.day];

    if (day.format("DD MM YY") === dayjs().format("DD MM YY")) {
      cls.push(stl.currentDay);
    }
    if (day.format("MM YYYY") === dayjs().format("MM YYYY")) {
      cls.push(stl.currentMonth);
    }
    if (day.format("DD MM YYYY") === this.props.m.format("DD MM YYYY")) {
      cls.push(stl.selectedDay);
    }

    return (
      <div className={cls.join(" ")} onClick={() => this.selectedDay(day)}>
        <div className={stl.dayInner}>
          <div className={stl.date}>{day.date()}</div>

          <div className={stl.noteItem}>
            {notes.map(note => {
              if (note.date === day.format("DD MM YYYY")) {
                return (
                  <span key={note.id} style={{ backgroundColor: note.color }} />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Day;
