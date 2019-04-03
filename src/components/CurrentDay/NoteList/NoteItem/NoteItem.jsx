import React from "react";

const NoteItem = ({ note, openModal }) => {
  const showModal = id => openModal(id);

  return (
    <li onClick={() => showModal(note.id)}>
      <b style={{ color: note.color }}>.</b>
      {note.title}
      <span>{note.time}</span>
    </li>
  );
};

export default NoteItem;
