import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import { type } from 'os';
import useFetch from '../hooks/useFetch';



const columns = [
    { field: 'userId', headerName: 'User id', width: 100 },
    { field: 'username', headerName: 'User Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 80 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 130},
    { field: 'isVerified', headerName: 'Verification Status', width: 150 },
    { field: 'createdAt', headerName: 'Created On', width: 130 },
    { field: 'UpdatedAt', headerName: 'Updated On',  width: 130},
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];

  

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

function UserTable() {
  return (
    <>
        <div style={{ height: 400}} className='mx-5'>
      <DataGrid
        rows={rows}
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