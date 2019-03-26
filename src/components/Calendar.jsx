import React, { Component } from "react";
import stl from "./Calendar.module.sass";
import MonthName from "./MonthName/MonthName";
import BodyCalendar from "./BodyCalendar/BodyCalendar";
import CurrentDay from "./CurrentDay/CurrentDay";
import dayjs from "dayjs";

const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class Calendar extends Component {
  state = { m: dayjs() };

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
      //console.log(arrDays[arrDays.length - 1]);
    } while (arrDays[arrDays.length - 1].format("DD MM YY") !== endOf);

    return arrDays;
  }

  render() {
    const { m } = this.state;
    return (
      <div className={stl.calendar}>
        <MonthName />
        <BodyCalendar
          renderMonth={this.renderMonth()}
          weekDay={weekDay}
          m={m}
        />
        <CurrentDay />
      </div>
    );
  }
}

export default Calendar;
