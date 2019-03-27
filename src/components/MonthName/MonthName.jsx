import React, { Component } from "react";
import stl from "./Month.module.sass";

class MonthName extends Component {
  state = {};

  renderMonth(calc) {
    const { m } = this.props;
    let months = [];

    if (calc === "prev") {
      for (let i = 6; i > 0; i--) {
        months.push(m.clone().subtract(i, "month"));
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        months.push(m.clone().add(i, "month"));
      }
    }

    return months;
  }

  changeDate = (month, direction) => {
    this.props.changeDate(month, direction);
  };

  refreshDate = () => {
    this.props.refreshDate();
  };

  render() {
    const { m } = this.props;

    return (
      <div className={stl.MonthName}>
        {this.renderMonth("prev").map((month, i) => {
          return (
            <div
              key={i}
              style={{ opacity: "." + (1 + i) }}
              onClick={() => this.changeDate(6 - i, "prev")}
            >
              {month.format("MMM")}
            </div>
          );
        })}

        <div className={stl.currMonth} onClick={this.refreshDate}>
          {m.format("MMM")}
        </div>
        <div className={stl.currYear}>{m.format("YYYY")}</div>

        {this.renderMonth().map((month, i) => {
          return (
            <div
              key={i}
              style={i !== 0 ? { opacity: "." + (6 - i) } : null}
              onClick={() => this.changeDate(i + 1, "next")}
            >
              {month.format("MMM")}
            </div>
          );
        })}
      </div>
    );
  }
}

export default MonthName;
