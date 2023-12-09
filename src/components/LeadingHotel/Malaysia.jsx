import React from 'react';
import "./LeadingHotels.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import C2 from "../../Assets/c2.avif";

const China = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return(
        <>

<div className='floatImg2'>
                    <Typography
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        >
                             <img src={C2} width="100px"></img>
                    </Typography>
                    <Popover
                        id="mouse-over-popover"
                     sx={{
                         pointerEvents: 'none',
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Malaysia</Typography>
                    </Popover>
                    </div>
        </>
    )
}

export default China;