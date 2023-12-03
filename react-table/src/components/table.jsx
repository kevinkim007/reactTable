import React from 'react';
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill} from "react-icons/bs"

export const Table = () => {
  return <div className='table-wrapper'>
     <table className='table'>
        <thead>
            <tr>
                <th>Page</th>
                <th className='expand'>Description</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Home</td>
                <td>This is the main Page</td>
                <td>
                    <span className=' label label-live'>Live</span>
                </td>
                <td>
                    <span className='actions'>
                        <BsFillTrashFill className='delete-btn' />
                        <BsFillPencilFill />
                    </span>
                </td>
            </tr>
            <tr>
                <td>page 2</td>
                <td>This is the second Page</td>
                <td>
                    <span className='label label-draft'> draft</span>
                </td>
                <td>
                    <span className='actions'>
                        <BsFillTrashFill className='delete-btn' />
                        <BsFillPencilFill />
                    </span>
                </td>
            </tr>
            <tr>
                <td>page 3</td>
                <td>This is the third Page</td>
                <td>
                    <span className='label label-error'>Error</span>
                </td>
                <td>
                    <span className='actions'>
                        <BsFillTrashFill className='delete-btn'/>
                        <BsFillPencilFill />
                    </span>
                </td>
            </tr>
        </tbody>
     </table>
      </div>;
  };



