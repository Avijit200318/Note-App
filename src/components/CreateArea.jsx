import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    // this use element is use to hide the content and button.
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        // console.log(event.target)
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        if (note.title === '' && note.content === '') {
            alert("Title and content are empty");
        }
        else {
            props.onAdd(note);
            event.preventDefault();
            setNote({
                title: "",
                content: ""
            });
        }
    }

    return (
        <div>
            <form className='create-note' style={props.mode === 'dark'? {background: "black", boxShadow: "0 8px 10px yellow"} : {background: "white"}}>
                <input name='title' onChange={handleChange} type="text" placeholder='Title' value={note.title} style={props.mode === 'dark'? {background: "black", color:"white"}: {background: "white"}} />
                <input style={props.mode === 'dark'? {background: "black", color:"white"}: {background: "white"}} id='content' name='content' onChange={handleChange} type="text" placeholder='Take note ...' value={note.content} />
                <button id='add' onClick={submitNote}><AddIcon /></button>
            </form>
        </div>
    )
}
export default CreateArea;