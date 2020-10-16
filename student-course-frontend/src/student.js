class Student  {
    
    constructor(student) {
        this.id = student.id
        this.full_name = student.full_name
        // this.course = student.course_id ----- to establish relationship between student and course
        this.email = student.email
        this.time_preference = student.time_preference
        this.course = student.course_id

        // Student.all.push(this)
    }

    renderStudent(){

    }


}

// store all the students in an array
Student.all = [];