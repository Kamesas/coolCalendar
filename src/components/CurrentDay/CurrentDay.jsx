import React from "react";
import stl from "./CurrentDay.module.sass";
import AddNote from "./AddNote/AddNote";
import NoteList from "./NoteList/NoteList";

const CurrentDay = ({ m, addNote, notes, deleteNote }) => {
  return (
    <div className={stl.CurrentDay}>
      <div className={stl.date}>
        <h2>
          {m.format("dddd,")} <span>{m.format("Do")}</span>
        </h2>
      </div>

      <NoteList notes={notes} m={m} deleteNote={deleteNote} />

      <div className={stl.inputFooter}>
        <AddNote addNote={addNote} m={m} />
      </div>
    </div>
  );
};

export default CurrentDay;
