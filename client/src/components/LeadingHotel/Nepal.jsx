import React from 'react';
import "./LeadingHotels.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import C3 from "../../Assets/c3.avif";
import Grid from "@mui/material/Grid";

const Nepal= ()=>{
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
                    <Typography
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        >
                            <img src={C3} width="130px" ></img>
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
        <Typography sx={{ p: 1 }}>Nepal</Typography>
                    </Popover>
        </>
    )
}

export default Nepal;