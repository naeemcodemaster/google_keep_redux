import {v4 as uuid} from 'uuid';
const initialState = {

    All_Notes: [
        { id: uuid(), title: "one", message: "this is one",status:'note' }
    ]

};
const addNote = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {All_Notes: [...state.All_Notes,action.payload]}
            
        case 'ARCHIVE_NOTE':
            const filter_note_archive = state.All_Notes.find((note) => note.id == action.id);
            console.log(filter_note_archive);
            filter_note_archive.status = 'archive';
            break;
        case 'DELETE_NOTE':
            const filter_note_trash = state.All_Notes.find((note) => note.id == action.id);
            console.log(filter_note_trash);
            filter_note_trash.status = 'trash';

        default:
            return state;
    }
}
export default addNote;