import React from "react";
import stl from "./BodyCalendar.module.sass";
import Day from "./Day/Day";

const BodyCalendar = ({ renderMonth }) => {
  return (
    <div className={stl.BodyCalendar}>
      {renderMonth &&
        renderMonth.map(day => {
          return <Day key={day.format("DD MM YY")} day={day} />;
        })}
    </div>
  );
};

export default BodyCalendar;
