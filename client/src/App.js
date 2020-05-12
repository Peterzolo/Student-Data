import React from 'react';
import StudentTable from './components/StudentTable';
import Form from './components/Form';
import Message from './components/Message';
import StudentApi from './StudentApi';
import Navbar from './components/layout/Navbar';
import Caption from './components/Caption';
import CampusTwo from './components/CampusTwo';
import CampusThree from './components/CampusThree';
import CampusFour from './components/CampusFour';
import CampusFive from './components/CampusFive';
import CampusSix from './components/CampusSix';
import CampusSeven from './components/CampusSeven';
import CampusEight from './components/CampusEight';
import CampusNine from './components/CampusNine';

import './App.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            isEditForm: false,
            student: {
                surname: "",
                firstName: "",
                middleName: "",
                gender: "",
                age: "",
                phone: "",
                email: "",
                admissionNum: "",
                course: "",
                faculty: "",
                department: ""


            },
            message: ""
        };

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    componentDidMount() {
        StudentApi.getStudents().then(data => {
            console.log(data);
            this.setState({ students: data.response })
        });
    }

    resetForm() {
        this.setState({
            student: {
                surname: "",
                firstName: "",
                middleName: "",
                gender: "",
                age: "",
                phone: "",
                email: "",
                admissionNum: "",
                course: "",
                faculty: "",
                department: ""

            }
        });
    }

    handleChange(e) {
        this.setState({
            student: {
                ...this.state.student,
                [e.target.name]: e.target.value
            }
        });
    }

    showEditForm(student) {
        this.setState({ isEditForm: true, student: student });
    }

    async deleteHandler(id) {
        const deleteData = await StudentApi.deleteStudent(id);
        const message = deleteData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await StudentApi.getStudents();
            this.setState({ message, students: data.response })
        }
    }

    async updateHandler(e) {
        e.preventDefault();
        const updateData = await StudentApi.updateStudent(this.state.student);
        const message = updateData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await StudentApi.getStudents();
            this.setState({ message, students: data.response })
        }
        this.setState({ isEditForm: false });
        this.resetForm();
    }

    async addHandler(e) {
        e.preventDefault();
        const postData = await StudentApi.createStudent(this.state.student);
        const message = postData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await StudentApi.getStudents();
            this.setState({ message, students: data.response });
        }
        this.resetForm();
    }


    renderEmployeeTable() {
        if (this.state.students.length > 0) {
            return (
                <StudentTable students={this.state.students}
                    deleteHandler={this.deleteHandler}
                    showEditForm={this.showEditForm} />
            );
        }
        return null;
    }

    renderForm() {
        return (
            <Form isEditForm={this.state.isEditForm}
                student={this.state.student}
                handleChange={this.handleChange}
                handler={!this.state.isEditForm ? this.addHandler : this.updateHandler} />
        );
    }

    renderMessage() {
        if (this.state.message === "")
            return null;
        return (
            <Message message={this.state.message} />
        );
    }

    render() {
        return (
            <div className ='container'>
                <div>
                    <Navbar />
                </div>
                <br />
                <br />

                <div className='renderTable'>
                    {this.renderEmployeeTable()}
                </div>

                <div className='section2-wrapper' id='render-form'>

                    <div className="row" id='section2'>
                        
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" id ='image-1'>
                            <Caption />
                            <div>
                               <CampusFive />
                            </div>

                            <div>
                               <CampusSix />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" id='image-1'>
                            <CampusTwo />
                            <div>
                               <CampusThree />
                            </div>

                            <div>
                               <CampusFour />
                            </div>
                          
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" id='image-1'>
                          <CampusNine />
                            <div>
                              <CampusSeven />
                            </div>

                            <div>
                               <CampusEight />
                            </div>
                            
                          
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" id ='form-wrap'>

                            <div>
                                {this.renderForm()}
                                {this.renderMessage()}
                            </div>

                        </div>

                    </div>
                </div>

                <div className='footer'>
                    Footer
                </div>

            </div>
        )
    }
}

export default App;