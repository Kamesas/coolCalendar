import React from "react";

const NoteList = ({ notes, m, deleteNote }) => {
  return (
    <ul>
      {notes.length !== 0
        ? notes.map(note => {
            if (note.date === m.format("DD MM YYYY")) {
              return (
                <li key={note.id}>
                  <button onClick={() => deleteNote(note.id)}>x</button>
                  <b style={{ color: note.color }}>.</b>
                  {note.title}
                  <span>{note.time}</span>
                </li>
              );
            } else {
              return null;
            }
          })
        : null}
    </ul>
  );
};

export default NoteList;
