const studentsEndPoint = "http://localhost:3000/students"
const coursesEndPoint = "http://localhost:3000/courses"

// Load contents to the DOM

document.addEventListener('DOMContentLoaded', () => {

    // Additional functions will be written in JS if functionalities to create students/courses is decided

    getCourses(); // will display all of the courses
})

// Display all students

function renderStudents(){

}

// May add postStudent if a functionality to create a new entry of students is decided upon
// This will use the POST method

// Delete a student record from the DOM
function deleteStudent(e){

}

function getCourses(){

}

// Delete a course record from the DOM
function deleteCourse(e){

}

// May add a postCourses if a functionality to create new course is allowed which will use POST method
// Most probably not -- may not want to add such functionality

// If creating a student is decided - createStudentFormHandler(e) function will be added

// If creating a course if decided - createCourseFormHandler(e) function will be added