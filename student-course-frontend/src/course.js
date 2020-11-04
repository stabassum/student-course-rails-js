class Course {

    constructor(course){
        this.id = course.id
        this.name = course.attributes.name
        this.description = course.attributes.description
        this.students = course.attributes.students
        // Course.all.push(this)
    }

    renderCourse(){
        const courseList = document.querySelector('#course-list')
        const courseListMarkup = `${this.name}`
        let element = document.createElement('option')
        element.innerHTML = courseListMarkup
        element.setAttribute("id", this.id)
        element.setAttribute("value", this.id)
        courseList.appendChild(element)

        const courseSelector = document.querySelector('#course-selector')
        let courseButton = document.createElement('button')
        courseButton.setAttribute("id", this.id)
        courseButton.innerHTML = `${this.name}`
        courseButton.addEventListener('click', (e) => renderStudents(e));
        courseSelector.appendChild(courseButton);
    }

}

// to store all the courses

Course.all = []