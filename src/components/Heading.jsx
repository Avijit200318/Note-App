import React from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

function Heading(props) {
  
  return(
    <header style={props.mode === 'dark'? {background:"#000040", boxShadow: "0 3px 9px white"} : {background: "#f5ba13"}}>
      <span id='logo'><AutoStoriesIcon/></span>
      <h1>KEEPER</h1>
      <button onClick={props.modeStyle}>{props.mode === 'dark'? <LightModeIcon/>: <NightsStayIcon/>}</button>
    </header>
    )
}

export default Heading;
