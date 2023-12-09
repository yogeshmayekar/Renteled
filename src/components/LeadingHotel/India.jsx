import React from 'react';
import "./LeadingHotels.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import C4 from "../../Assets/c4.avif";

const India = ()=>{
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

<div className='floatImg4'>
                    <Typography
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        >
                            <img src={C4} width="130px" ></img>
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
        <Typography sx={{ p: 1 }}>India</Typography>
                    </Popover>
                    </div>
        </>
    )
}

export default India;