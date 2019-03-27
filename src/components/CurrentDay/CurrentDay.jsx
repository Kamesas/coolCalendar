import React from "react";
import stl from "./CurrentDay.module.sass";

const CurrentDay = ({ m }) => {
  return (
    <div className={stl.CurrentDay}>
      <div className={stl.date}>
        <h2>
          {m.format("dddd,")} <span>{m.format("Do")}</span>
        </h2>
      </div>
      <ul>
        <li>
          <b>.</b> Item1 <span>10.45</span>
        </li>
        <li>
          <b>.</b>Item2 <span>10.45</span>
        </li>
        <li>
          <b>.</b>Item3 <span>10.45</span>
        </li>
      </ul>
      <div className={stl.inputFooter}>
        <input type="text" placeholder="Add new note" />
      </div>
    </div>
  );
};

export default CurrentDay;
