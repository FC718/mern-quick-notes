import { useEffect } from "react";
import NoteCard from "../../components/NoteCard/NoteCard"
import CreateNewNote from "../../components/CreateNewNote/CreateNewNote";

export default function NotesPage({ notes, addNote }) {

  return (
    <>
    <h1>Notes</h1>
    <div>
    <CreateNewNote addNote={addNote} notes={ notes } />
    </div>
      <div>
        {notes.map((note, idx) => (
            <div>
              <div key = {idx}>
              <NoteCard note={note} idx={idx} />
              </div>
            </div>
        ))}
      </div>
    </>
  );
}