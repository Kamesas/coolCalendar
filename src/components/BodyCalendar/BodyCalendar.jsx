import React from "react";
import stl from "./BodyCalendar.module.sass";
import Day from "./Day/Day";

const BodyCalendar = ({ m, renderMonth, weekDay }) => {
  return (
    <div className={stl.wrappBodyCalendar}>
      <div className={stl.headerBodyCalendar}>
        <div className={stl.BodyCalendarCurrentMonth}>
          <h1>
            {m.format("MMMM,")} <span>{m.format("YYYY")}</span>
          </h1>
          <div className={stl.btnAdd} />
        </div>

        <div className={stl.BodyCalendarWeekDay}>
          {weekDay.map((name, i) => {
            return <div key={i}>{name}</div>;
          })}
        </div>
      </div>

      <div className={stl.BodyCalendar}>
        {renderMonth &&
          renderMonth.map(day => {
            return <Day key={day.format("DD MM YY")} day={day} />;
          })}
      </div>
    </div>
  );
};

export default BodyCalendar;
