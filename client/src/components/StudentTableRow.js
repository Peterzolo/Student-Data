import React from 'react';

import './StudentTable2.css'

const StudentTableRow = (props) => {
    const { _id, surname, firstName, middleName, gender, age, phone, email,course, admissionNum, faculty, department  } = props.student;
    return (
        <tr className='table-content'>
            
            <td data-title='1' className='table-content'>{surname}</td>
            <td data-title='reg1' className='table-content'>{firstName}</td>
            <td data-title='reg1' className='table-content'>{middleName}</td>
            <td data-title='reg1' className='table-content'>{gender}</td>
            <td data-title='reg1' className='table-content'>{age}</td>
            <td data-title='reg1' className='table-content'>{phone}</td>
            <td data-title='reg1' className='table-content'>{email}</td>
            <td data-title='reg1' className='table-content'>{course}</td>
            <td data-title='reg1' className='table-content'>{admissionNum}</td>
            <td data-title='reg1' className='table-content'>{faculty}</td>
            <td data-title='reg1' className='table-content'>{department}</td>
            

            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={props.showEditForm.bind(this, props.student)} className="btn btn-secondary">Edit</button>
                    <button type="button" onClick={props.deleteHandler.bind(this, _id)} className="btn btn-danger">Delete</button>
                </div>
            </td>

        </tr>
    )
}

export default StudentTableRow;