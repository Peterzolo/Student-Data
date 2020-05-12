export default {
    getStudents : ()=>{
        return fetch('/student')
                .then(res => res.json())
                .then(data => data);
    },
    deleteStudent : (_id)=>{
        return fetch(`/student/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    updateStudent : (student)=>{
        return fetch(`/student/${student._id}`,
                    {method : "put",
                     body: JSON.stringify(student),
                     headers : {
                         "Content-Type" : "application/json"
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createStudent : (student)=>{
        return fetch(`/student`,
            {method : 'post',
            body: JSON.stringify(student),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}