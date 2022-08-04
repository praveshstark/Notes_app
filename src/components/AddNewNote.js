import React, { useState } from 'react'

const AddNewNote = ({ handleAddNote }) => {
    const [addNoteText, setAddNoteText] = useState('');
    const charLength = 200;

    const handleChange = (e) => {
        if (charLength - e.target.value.length >= 0) {
            setAddNoteText(e.target.value);
        }
    }

    const handleSave = () => {
        if (addNoteText.trim().length > 0) {
            handleAddNote(addNoteText);
            setAddNoteText('');
        }
    };

    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="8"
                placeholder='Type your Note.....'
                value={addNoteText}
                onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{charLength - addNoteText.length} Remaining</small>
                <button className='save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNewNote