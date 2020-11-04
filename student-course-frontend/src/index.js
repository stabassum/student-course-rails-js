const studentsEndPoint = "http://localhost:3000/students"
const coursesEndPoint = "http://localhost:3000/courses"

// Load contents to the DOM

document.addEventListener('DOMContentLoaded', () => {

    const createStudentCardForm = document.querySelector("#card-form");
    createStudentCardForm.addEventListener("submit", (e) => createStudentFormHandler(e));
    // Additional functions will be written in JS if functionalities to create students/courses is decided

    // const createCourseForm = document.querySelector

    getCourses(); // will display all of the courses
})

// Display all students

function renderStudents(e){
    const studentCards = document.querySelector('#card-container')
    studentCards.innerHTML = `CURRENT COURSE: ${e.target.innerText} <br/><br/>`
    
    let removeCourse = document.createElement("button")
    removeCourse.innerHTML = `DELETE COURSE`
    removeCourse.setAttribute("id", e.target.id)
    // need to create delete function
    removeCourse.addEventListener("click", (e) => deleteCourse(e))
    studentCards.appendChild(removeCourse)    
    
    fetch(`http://localhost:3000/courses/${e.target.id}`)
    .then(resp => resp.json())
    .then(course => {
        course.data.attributes.students.forEach(student => {
            let newStudent = new Student(student)
            newStudent.renderStudent();
        })
        .catch(error => {alert(error.message)})
    })
}

function postStudent(full_name, email, time_preference, course_id){
    const bodyData = {full_name, email, time_preference, course_id}

    fetch(studentsEndPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(resp => resp.json())
    .then(student => {
        let newStudent = new Student(student.data)
        newStudent.renderStudent()
        location.reload()
    })
    .catch(error => {alert(error.message)})
}

// Delete a student record from the DOM
function deleteStudent(e){
    fetch(`http://localhost:3000/students/${e.target.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(function(resp){
        if(resp.status = 204)
            location.reload();
        else
            throw new Error(resp.message)
            console.log(resp.status)
    })
    .catch(error => {alert(error.message)})
}

function getCourses(){
    fetch(coursesEndPoint)
    .then(resp => resp.json())
    .then(courses => {
        courses.data.forEach(course =>{
            const newCourse = new Course(course)
            newCourse.renderCourse();
        })
    })
}

// Delete a course record from the DOM
function deleteCourse(e){
    fetch(`http://localhost:3000/courses/${e.target.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(function(resp){
        if(resp.status = 204)
            location.reload();
        else
            throw new Error(resp.message)
            console.log(resp.status)
    })
    .catch(error => {alert(error.message)})
}

// create student not working entirely

function createStudentFormHandler(e){
    e.preventDefault()
    const fullNameInput = document.querySelector('#full-name').value
    const emailInput = document.querySelector('#email').value
    const timePreferenceInput = document.querySelector('time-preference')
    const courseId = parseInt(document.querySelector('#course-list').value)

    postStudent(fullNameInput, emailInput, timePreferenceInput, courseId)
}