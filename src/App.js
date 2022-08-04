import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [note, setNote] = useState([{
    id: nanoid(),
    text: "First Note!!",
    date: "04/07/2022"
  },
  {
    id: nanoid(),
    text: "Second Note!!",
    date: "01/08/2022"
  },
  {
    id: nanoid(),
    text: "Third Note!!",
    date: "04/08/2022"
  }]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNote(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(note)
    );
  }, [note]);

  const addNote = (text) => {
    const date = new Date();
    const addNewNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const addNewNotes = [...note, addNewNote];
    setNote(addNewNotes);
  }

  const deleteNote = (id) => {
    const addNewNotes = note.filter((note) => note.id !== id);
    setNote(addNewNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={note.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App