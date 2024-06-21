import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Alerts({alertMessage}) {
  // console.log(alertMessage.status)
  return (
    <>
    <div className=' w-fit rounded-sm  fixed right-0 bottom-0 translate-x-[-5%] translate-y-[-8%] z-9999999'>
    <Stack sx={{ width: '100%' }} spacing={1}>
      
      { (alertMessage.status === 200 ) && <Alert severity="success" >{alertMessage.data || "Acount Created"}</Alert>}
      {/* <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert> */}
      {(alertMessage.status >= 400) && <Alert severity="error">{alertMessage.data.message || 'Error'}</Alert>}
    </Stack>
    </div>
    </>
  )
}

export default Alerts