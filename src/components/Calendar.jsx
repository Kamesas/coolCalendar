import React, { Component } from "react";
import stl from "./Calendar.module.sass";
import MonthName from "./MonthName/MonthName";
import BodyCalendar from "./BodyCalendar/BodyCalendar";
import CurrentDay from "./CurrentDay/CurrentDay";

class Calendar extends Component {
  state = {};
  render() {
    return (
      <div className={stl.calendar}>
        <MonthName />
        <BodyCalendar />
        <CurrentDay />
      </div>
    );
  }
}

export default Calendar;
