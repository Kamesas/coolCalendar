import React from "react";
import stl from "./FullNoteItem.module.sass";

const NoteItem = ({ note, deleteNote, closeModal }) => {
  const removeNote = id => {
    deleteNote(id);
    closeModal();
  };

  return (
    <div className={stl.noteInModal}>
      <h2>{note.date}</h2>

      {note.title}
      <span>{note.time}</span>
      <button onClick={() => removeNote(note.id)}>x</button>
    </div>
  );
};

export default NoteItem;
