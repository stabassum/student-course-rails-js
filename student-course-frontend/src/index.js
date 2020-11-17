const studentsEndPoint = "http://localhost:3000/students"
const coursesEndPoint = "http://localhost:3000/courses"

// Load contents to the DOM
// the event listener saves from putting js on bottom
document.addEventListener('DOMContentLoaded', () => {

    const createStudentCardForm = document.querySelector("#card-form");
    createStudentCardForm.addEventListener("submit", (e) => createStudentFormHandler(e));

    const createCourseForm = document.querySelector("#course-form");
    createCourseForm.addEventListener("submit", (e) => createCourseFormHandler(e));

    getCourses(); // will display all of the courses
})

// rendering students is working

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
    .then(course => { // for the first time there is hold, so easiest way is to call it here

        // sort() higher order function , means that, that function can accept another function

        course.data.attributes.students.sort((a,b) => (a.full_name.toLowerCase() > b.full_name.toLowerCase()) ? 1 : (a.full_name.toLowerCase() < b.full_name.toLowerCase()) ? -1 : 0).forEach(student => {
            let newStudent = new Student(student)
            // sort the students array list then render each student
           // newStudent.sort((a,b) => (a.full_name > b.full_name) ? 1 : (a.full_name < b.full_name) ? -1 : 0)

            newStudent.renderStudent()
            //newStudent.renderStudent().sort(); //maybe method chaining? calling sort
            // on just one student and not necessarily the entire array. 
            // it's not working because I am not calling it on the right place
            // can give sort more functionalities, ie. each student has specific attributes.
            // understand how sort works. Work with documentation, MDN & W3Schools - the docs are written as to what you need
            // See how to fix the refresh.

            // talk about how to sort and how to just render HTML
         })//.sort(function(a,b){
        //     if (a.full_name.toLowerCase() < b.full_name.toLowerCase()) return -1;
        //     if (a.full_name.toLowerCase() > b.full_name.toLowerCase()) return 1;
        //     return 0; // if they are equal
        // }) // once all students are rendered the students are sorted
        // force the sort on an objects property - full_name
        
        .catch(error => {alert(error.message)})
    })
}

// create a sort method for the objects
// function sortStudents(a, b){
//        if(a.full_name.toLowerCase() < b.full_name.toLowerCase()) return -1;
//        if(a.full_name.toLowerCase() > b.full_name.toLowerCase()) return -1;
//        return 0;
// }


// POST student 

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
        location.reload() // reloads the page so updated infor is shown
    })
    .catch(error => {alert(error.message)})
}

// Delete student is working

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

// GET is working

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

// POST COURSE

function postCourse(name){
    fetch(coursesEndPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name})
    })
    .then(resp => resp.json())
    .then(course => {
        const newCourse = new Course(course.data)
        newCourse.renderCourse();
    })
    .catch(error => {alert(error.message)})
}

// delete course is working
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

// create student 

function createStudentFormHandler(e){
    e.preventDefault()
    const fullNameInput = document.querySelector('#full-name').value
    const emailInput = document.querySelector('#email').value
    const timePreferenceInput = document.querySelector('#time-preference').value
    const courseId = parseInt(document.querySelector('#course-list').value)

    postStudent(fullNameInput, emailInput, timePreferenceInput, courseId)
}

// create course 

function createCourseFormHandler(e){
    e.preventDefault()
    const nameInput = document.querySelector('#input-name-course').value
    const descriptionInput = document.querySelector('#input-description-course').value
   
    postCourse(nameInput, descriptionInput)
}