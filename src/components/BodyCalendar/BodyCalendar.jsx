import React, { Component } from "react";
import stl from "./BodyCalendar.module.sass";
import Day from "./Day/Day";
import Modal from "../UI/Modal/Modal";

class BodyCalendar extends Component {
  state = { isShowModal: false };

  addNote = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { m, renderMonth, weekDay, selectedDay, notes } = this.props;
    const { isShowModal } = this.state;
    return (
      <div className={stl.wrappBodyCalendar}>
        <div className={stl.headerBodyCalendar}>
          <div className={stl.BodyCalendarCurrentMonth}>
            <h1>
              {m.format("MMMM,")} <span>{m.format("YYYY")}</span>
            </h1>
            <div className={stl.btnAdd} onClick={this.addNote} />
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
              return (
                <Day
                  key={day.format("DD MM YY")}
                  day={day}
                  selectedDay={selectedDay}
                  notes={notes}
                  m={m}
                />
              );
            })}
        </div>

        {isShowModal ? (
          <Modal closeModal={this.closeModal}>{<h1>HI</h1>}</Modal>
        ) : null}
      </div>
    );
  }
}

export default BodyCalendar;
