import React, { Component } from "react";
import stl from "./Day.module.sass";
import dayjs from "dayjs";

class Day extends Component {
  state = {};

  selectedDay = day => {
    this.props.selectedDay(day);
  };

  render() {
    const { day } = this.props;
    let cls = [stl.day];

    if (day.format("DD MM YY") === dayjs().format("DD MM YY")) {
      cls.push(stl.currentDay);
    }
    if (day.format("MM YYYY") === dayjs().format("MM YYYY")) {
      cls.push(stl.currentMonth);
    }

    return (
      <div className={cls.join(" ")} onClick={() => this.selectedDay(day)}>
        <div>{day.date()}</div>
      </div>
    );
  }
}

export default Day;
