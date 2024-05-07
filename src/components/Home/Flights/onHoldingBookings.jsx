import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'bookingRef', headerName: 'Booking Ref', renderCell: (params) => <a href="#">{params.value}</a> },
    { field: 'firstName', headerName: 'Lead Pax' },
    { field: 'date', headerName: 'Travel Date'},
    { field: 'stage', headerName: 'Booking Stage', renderCell: (params) => <span style={{ backgroundColor: params.row.bgColor, color: params.row.color, padding: '10px 6px', minWidth:"98px" }}>{params.value}</span> },
    { field: 'module', headerName: 'Module'},
  ];
  
  const rows = [
    { id: 1, bookingRef: 'TWX169661197899', firstName: 'Jon Snow', date: '2024-05-07', stage: 'Completed', module: 'Flight', bgColor: '#d1f4e8', color:'#05a56d' },
    { id: 2, bookingRef: 'TWX169661197899', firstName: 'Cersei Lannister', date: '2024-05-08', stage: 'Pending', module: 'Flight', bgColor: '#e5f0fe', color:'#2a5ee6' },
    { id: 3, bookingRef: 'TWX169661197899', firstName: 'Mary Snow', date: '2024-05-07', stage: 'Completed', module: 'Flight', bgColor: '#d1f4e8', color:'#05a56d' },
    { id: 4, bookingRef: 'TWX169661197899', firstName: 'Post Malon', date: '2024-05-08', stage: 'Cancelled', module: 'Flight', bgColor: '#ffe1e6', color:'#d65b70' },
    { id: 5, bookingRef: 'TWX169661197899', firstName: 'Julie Snow', date: '2024-05-07', stage: 'Completed', module: 'Flight', bgColor: '#d1f4e8', color:'#05a56d' },
    { id: 6, bookingRef: 'TWX169661197899', firstName: 'Mary Lannister', date: '2024-05-08', stage: 'Pending', module: 'Flight', bgColor: '#e5f0fe', color:'#2a5ee6' },
  ];
  

function OnHoldingBookings() {
  return (

   
                            <div style={{ width: '100%' }} className='border-1'>
                             <div className="table-header border-bottom d-flex justify-content-between align-items-center py-3 px-2">
                                <h6 className='m-0'>ON HOLD BOOKINGS</h6>
                                <div className="input-grp">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Bookings Reference"  />
                                        <span class="input-group-text" id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                                        </span>
                                    </div>
                                </div>
                                <a href="#">View All</a>
                            </div>
                                <DataGrid style={{border:"0"}}
                                    rows={rows}
                                    columns={columns}
                                    />
                            </div>
  );
}

export default OnHoldingBookings;