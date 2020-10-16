class Course {

    constructor(course){
        this.id = course.id
        this.name = course.attributes.name
        this.description = course.attributes.description
        this.students = course.attributes.students
        // Course.all.push(this)
    }

    renderCourse(){
        
    }

}

// to store all the courses

Course.all = []