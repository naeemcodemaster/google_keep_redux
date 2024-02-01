import React, { useState } from 'react'
import { FcFullTrash } from 'react-icons/fc'
import { IoMdArchive } from 'react-icons/io'
import { v4 as uuid } from 'uuid';

// imports of Redux
import { useSelector, useDispatch } from 'react-redux';
const noteObj = {
    id: uuid(),
    title: '',
    message: ''
}
const Content = () => {
    
    const { All_Notes } = useSelector(state => state.addNote)
    const filtered_note = All_Notes.filter((n) => {
        return n.status == 'note';
    })
    console.log(filtered_note);
    const dispatch = useDispatch()
    console.log(All_Notes);


    // Get Form Data
    const [note, setNote] = useState(noteObj);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let changeNotes = { ...note, [name]: value }
        setNote(changeNotes);
    }

    const addNote = (e) => {
        e.preventDefault();
        if (note.title || note.message) {
            dispatch({ type: "ADD_NOTE", payload: { ...note, status: 'note', id: uuid() } })
            console.log(note);
            setNote(noteObj);
        }
    }

    const archiveNote = (note_id) => {
        alert("Added to archive");
        dispatch({ type: 'ARCHIVE_NOTE', id: note_id })
        

    }
    const deleteNote = (note_id) => {
        alert("Added to Trash");
        dispatch({ type: 'DELETE_NOTE', id: note_id })
    }

    return (
        <>
            <div className='content'>
                <div className='note_form'>
                    <form onSubmit={(e) => addNote(e)}>
                        <h2>Add Note</h2>
                        <input type='text' name='title' value={note.title} onChange={(e) => handleInput(e)} placeholder='Enter Title' />
                        <textarea rows="10" cols="50" placeholder='Take a note' name='message' value={note.message} onChange={(e) => handleInput(e)}>

                        </textarea>
                        <button className='btn' type='submit'>Add Note</button>
                    </form>
                </div>
                <div className='note_data'>
                    {
                        filtered_note ? filtered_note.map((printnote => (
                            <div className='card'>
                                <h3>{printnote.title}</h3>
                                <p>{printnote.message}</p>

                                <div className='icons'>
                                    <IoMdArchive onClick={() => archiveNote(printnote.id)} />
                                    &nbsp;
                                    <FcFullTrash onClick={() => deleteNote(printnote.id)} />
                                </div>
                            </div>
                        ))) : "No Note"
                    }


                </div>

            </div>
        </>
    )
}

export default Content