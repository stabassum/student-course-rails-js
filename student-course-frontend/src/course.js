class Course {

    constructor(course){
        this.id = course.id
        this.name = course.attributes.name
        this.description = course.attributes.description
        this.students = course.attributes.students
        Course.all.push(this)
    }

    renderCourse(){
        const courseList = document.querySelector('#course-list')
        const courseListMarkup = `${this.name}`
        let element = document.createElement('option')
        element.innerHTML = courseListMarkup
        element.setAttribute("id", this.id)
        element.setAttribute("value", this.id)
        courseList.appendChild(element)

        // const courseSelector = document.querySelector('#course-selector')
        let courseButton = document.createElement('button')
        courseButton.setAttribute("id", this.id)
        courseButton.innerHTML = `${this.name}`
        courseButton.addEventListener('click', (e) => 
            {
                // sort the events

                // render the events
                renderStudents(e)
            }
        );

        // Course.students.sort() ???

        const courseSelector = document.querySelector('#course-selector')
        courseSelector.appendChild(courseButton);
    }

}

// to store all the courses

Course.all = []

// ruby and rails, users have many, etc.
// once things get complicated its best to separate content and DRY out the code. in case course or students get more complicated, separate logic
// and focus more on building once file over the other
// It could work in one file but separate the code

// sort
// Student.sort(function(a,b){
//     if(a.full_name.toLowerCase() < b.full_name.toLowerCase()) return -1;
//     if(a.full_name.toLowerCase() > b.full_name.toLowerCase()) return -1;
//     return 0;
// })


// function sortStudents(a, b){
//        if(a.full_name.toLowerCase() < b.full_name.toLowerCase()) return -1;
//        if(a.full_name.toLowerCase() > b.full_name.toLowerCase()) return -1;
//        return 0;
// }