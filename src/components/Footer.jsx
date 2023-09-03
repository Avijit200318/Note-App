import React from 'react';

function Footer(props) {
    return (
        <footer style={props.mode === 'dark'? {color: "white"}: {color: "black"}} >
            Coppyright &copy; {new Date().getFullYear()}
        </footer>
    )
}

export default Footer;
