import React, { useState } from "react";
import NoteItem from "./NoteItem/NoteItem";
import FullNoteItem from "./FullNoteItem/FullNoteItem";
import Modal from "../../UI/Modal/Modal";

const NoteList = ({ notes, m, deleteNote }) => {
  const [isModal, setModal] = useState(false);
  const [noteId, setNoteId] = useState(null);
  const closeModal = () => setModal(false);
  const openModal = id => {
    setModal(true);
    setNoteId(id);
  };
  return (
    <ul>
      {notes.length !== 0
        ? notes.map(note => {
            if (note.date === m.format("DD MM YYYY") && !isModal) {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  deleteNote={deleteNote}
                  openModal={openModal}
                />
              );
            }
            if (note.id === noteId && isModal) {
              return (
                <Modal key={note.id} closeModal={closeModal}>
                  <FullNoteItem
                    note={note}
                    deleteNote={deleteNote}
                    closeModal={closeModal}
                  />
                </Modal>
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
