import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import { type } from 'os';
import useFetch from '../hooks/useFetch';



const columns = [
    { field: 'id', headerName: 'User id', width: 100 },
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 80 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 130},
    { field: 'isVerified', headerName: 'Verification Status', width: 150 },
    { field: 'createdAt', headerName: 'Created On', width: 130 },
    { field: 'UpdatedAt', headerName: 'Updated On',  width: 130},
  ];

  

function UserTable({data}) {
  const newData = data.map((item, i)=>{
    return {
      id:item?._id,
      username: item?.username,
      email: item?.email,
      phoneNumber : item?.phoneNumber,
      isVerified : item?.isVerified,
      createdAt : item?.createdAt,
      UpdatedAt : item?.UpdatedAt
    }
  })
  
  return (
    <>
        <div style={{ height: 400}} className='mx-5'>
      <DataGrid
        rows={newData}
        columns={columns}
        sx={{ overflowX: 'auto'}}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
    </>
  )
}

export default UserTable