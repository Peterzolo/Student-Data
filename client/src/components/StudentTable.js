import React from 'react';
import StudentTableRow from './StudentTableRow';

import './StudentTable2.css'

const StudentTable = (props) => {
    return (
        <div className='table-responsive-sm' >
            <table className='table table-bordered table-striped table-hover table-mc-light-blue'>
        <thead>

            <tr>
                <th className='table-count-head'><h5 className='table-head-2'>Surname</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >First Name</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >middle name</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >gender</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Age</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Phone</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Email</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Course</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Admission</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Faculty</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Department</h5></th>
                <th className='table-count-head'><h5 className='table-head-2' >Edit | Delete</h5></th>
            </tr>
        </thead>
        <tbody>
                    {props.students.map(student => {
                        return <StudentTableRow key={student._id}
                            student={student}
                            deleteHandler={props.deleteHandler}
                            showEditForm={props.showEditForm} />
                    })}

           

           
           
        </tbody>

    </table>

</div>
        
    )
}

export default StudentTable;