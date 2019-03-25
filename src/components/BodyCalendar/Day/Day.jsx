import React from "react";
import stl from "./Day.module.sass";
import dayjs from "dayjs";

const Day = ({ day }) => {
  let cls = [stl.day];

  if (day.format("DD MM YY") === dayjs().format("DD MM YY")) {
    cls.push(stl.currentDay);
  }

  return (
    <div className={cls.join(" ")}>
      <div>{day.date()}</div>
    </div>
  );
};

export default Day;
