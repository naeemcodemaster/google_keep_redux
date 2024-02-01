import React, { useState } from 'react'
import Aside from '../notes/Aside'
import { FcFullTrash } from 'react-icons/fc'
import { IoMdArchive } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux';
const Archives = () => {
    const { All_Notes } = useSelector(state => state.addNote)
    const filtered_note = All_Notes.filter((n) => {
        return n.status == 'archive';
    })
    console.log(filtered_note);
    const dispatch = useDispatch()
    console.log(All_Notes);
    return (
        <>
            <div className='container'>
                <Aside />
                <div className='content'>

                    <div className='note_data'>
                    {
                        filtered_note ? filtered_note.map((printnote => (
                            <div className='card'>
                                <h3>{printnote.title}</h3>
                                <p>{printnote.message}</p>

                                {/* <div className='icons'>
                                    <IoMdArchive onClick={() => archiveNote(printnote.id)} />
                                    &nbsp;
                                    <FcFullTrash />
                                </div> */}
                            </div>
                        ))) : "No Note"
                }
                       


                    </div>

                </div>
            </div>
        </>
    )
}

export default Archives