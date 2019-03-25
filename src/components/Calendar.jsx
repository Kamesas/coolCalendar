import React, { Component } from "react";
import stl from "./Calendar.module.sass";
import MonthName from "./MonthName/MonthName";
import BodyCalendar from "./BodyCalendar/BodyCalendar";
import CurrentDay from "./CurrentDay/CurrentDay";
import dayjs from "dayjs";

class Calendar extends Component {
  state = { m: dayjs() };

  renderMonth() {
    const { m } = this.state;
    const startOf = m.startOf("M").day(1);
    const endOf = m
      .endOf("M")
      .day(0)
      .format("DD MM YY");

    let arrDays = [];
    let i = 0;

    do {
      arrDays.push(startOf.add(i, "day"));
      i++;
      console.log(arrDays[arrDays.length - 1]);
    } while (arrDays[arrDays.length - 1].format("DD MM YY") !== endOf);

    return arrDays;
  }

  render() {
    return (
      <div className={stl.calendar}>
        <MonthName />
        <BodyCalendar renderMonth={this.renderMonth()} />
        <CurrentDay />
      </div>
    );
  }
}

export default Calendar;
