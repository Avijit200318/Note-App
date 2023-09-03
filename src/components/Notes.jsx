import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return(
        <div className='note' style={props.mode === 'dark'? {background: "black", color: "white", boxShadow: "0 8px 10px white"}: {background: "white"}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button style={props.mode === 'dark'? {background: "black"}:{ backgrond: "#eee"}} onClick={handleClick}><DeleteIcon/></button>
        </div>
    )
}

export default Notes;
