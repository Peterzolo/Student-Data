import React from 'react';
import Input from './Input';

import './Form.css'

const Form = (props) => {
    return (
        <form onSubmit={props.handler} className='student-form'>
            <h4 className='add-student'>{props.isEditForm ? "Editing Student: " : "Add Student: "}</h4>
            <br />
            <div className="form-group" id='regForm'>
                <Input name="surname" type='text'
                    id='form-input'
                    placeholder="Enter Sur-Name ...."
                    labelName="SurName: "
                    handleChange={props.handleChange}
                    value={props.student.surname} />

                <Input name="firstName"
                    placeholder="Enter First name"
                    labelName="First Name: "
                    handleChange={props.handleChange}
                    value={props.student.firstName} />

                <Input name="middleName"
                    placeholder="Middle Name"
                    labelName="Middle Name: "
                    handleChange={props.handleChange}
                    value={props.student.middleName} />

                <Input name="gender"
                    type='text'
                    placeholder="Gender"
                    labelName="Gender "
                    handleChange={props.handleChange}
                    value={props.student.gender} />
                <Input name="age"
                    type='Number'
                    placeholder="Age"
                    labelName="Age "
                    handleChange={props.handleChange}
                    value={props.student.age} />
                <Input name="phone"
                    placeholder="Phone"
                    labelName="Phone "
                    handleChange={props.handleChange}
                    value={props.student.phone} />
                <Input name="email"
                    type="email"
                    placeholder="Email"
                    labelName="Email "
                    handleChange={props.handleChange}
                    value={props.student.email} />
                <Input name="admissionNum"
                    placeholder="Admission_Number"
                    labelName="Admission Nos "
                    handleChange={props.handleChange}
                    value={props.student.admissionNum} />
                <Input name="course"
                    placeholder="Course"
                    labelName="Course "
                    handleChange={props.handleChange}
                    value={props.student.course} />
                <Input name="faculty"
                    placeholder="Faculty"
                    labelName="Faculty "
                    handleChange={props.handleChange}
                    value={props.student.faculty} />
                <Input name="department"
                    placeholder="Department"
                    labelName="Department "
                    handleChange={props.handleChange}
                    value={props.student.department} />






            </div>
            <button type="submit" className="btn btn-success" id='add-btn'>Add Student</button>
        </form>
    )
}

export default Form;