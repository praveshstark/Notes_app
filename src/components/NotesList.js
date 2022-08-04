import React from 'react'
import Note from './Note'
import AddNewNote from './AddNewNote'

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}

            <AddNewNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList