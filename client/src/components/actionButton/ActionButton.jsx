import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close';

function ActionButton({fontSize}) {
    const navigate = useNavigate()
  return (
    <div className="action__button">
        <KeyboardBackspaceIcon className="closeButton" sx={{fontSize:`${fontSize}rem`}} onClick={()=>navigate(-1)} />
        <CloseIcon className="closeButton" sx={{fontSize:`${fontSize}rem`}} onClick={()=>navigate("/")}  />
    </div>
  )
}

export default ActionButton;