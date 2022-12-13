import { useState } from 'react'
export default function CreateNewNote({addNote}) {
    const [note, setNote] = useState({content: ''})
    function handleChange(evt) {
        setNote({content: evt.target.value})
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(note)
        setNote({content: ''})
    }
    console.log(note)

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={note.content} 
                onChange={handleChange}
                name='content'
                placeholder='enter text here'
            />
            <button type='submit'>
                SUBMIT
            </button>
        
        </form>
        </>
    )
} 