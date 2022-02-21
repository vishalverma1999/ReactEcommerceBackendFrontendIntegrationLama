import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { userRows } from '../../../data';
import React, { useState } from 'react';
function UserList() {

    const [data, setdata] = useState(userRows);  // we are using state Hook because we can set this data whatever we want for example when we click on delete button we can set this data using setData() function and we can successfully delete the related user

const handleDelete = (id)=>{
    setdata(data.filter((items)=> items.id !== id));
}
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            // editable: true,    // helps to edit like input box
            // you can use them directly but also you can render different outputs for example you might need to add user profile picture or green dot for passive or red for active something like that what i mean is you can create your own column rule, renderCell helps us to write column rule
            renderCell: (params)=>{
                return (
                    <div className='userListUser'>
                        <img src={params.row.avatar} alt="" className='userListImage' />
                        {params.row.userName}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 110,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return (
                    <>
                    <Link to ={"/user/"+ params.row.id} >
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        }

    ];

    

    return (
        <div className='userList'>
            <DataGrid
                rows={data} 
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                /*okay so when i click on edit or delete icon in action column, the checkbox gets selected, to prevent this i can go to the DataGrid and write disableSelectionOnClick */
                disableSelectionOnClick  
            />
        </div>
    )
}

export default UserList


/*
-React Material UI Table tutorial:-
                libraries used are - react router dom
                To generate material ui Data Table packages to install  -- 
                                                @material-ui/data-grid                       
                                                @emotion/react
                                                @emotion/styled
                                                @mui/material
                                                @mui/styled-engine
                                                @mui/x-data-grid
 */