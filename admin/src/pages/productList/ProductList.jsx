import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { productRows } from '../../data';
import React, { useState } from 'react';


function ProductList() {

    const [data, setdata] = useState(productRows);


    const handleDelete = (id) => {
        setdata(data.filter((items) => items.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'product',
            width: 200,
            // editable: true,    // helps to edit like input box
            // you can use them directly but also you can render different outputs for example you might need to add user profile picture or green dot for passive or red for active something like that what i mean is you can create your own column rule, renderCell helps us to write column rule
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img src={params.row.img} alt="" className='productListImage' />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 110,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id} >
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }

    ];


    return (
        <div className='productList'>
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

export default ProductList
