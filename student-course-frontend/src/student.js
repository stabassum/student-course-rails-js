class Student  {
    
    constructor(student) {
        this.id = student.id
        this.full_name = student.full_name
        // this.course = student.course_id ----- to establish relationship between student and course
        this.email = student.email
        this.time_preference = student.time_preference
        this.course = student.course_id

        Student.all.push(this)
    }

    renderStudent(){
        const studentCards = document.querySelector('#card-container')

        const cardMarkup = `
            <div class="single-card" id=${this.id} style="background-color:pink">
                <h3 class="card-full-name">Student Full Name : ${this.full_name}</h3>
                <h3 class="card-email">Student Email : ${this.email}</h3>
                <h3 class="card-time-preference">Student Time Preference : ${this.time_preference}</h3>
            </div>
        `;

        let element = document.createElement('div')
        element.innerHTML = cardMarkup
        studentCards.appendChild(element)

        let removeStudent = document.createElement('button')
        removeStudent.setAttribute("id", this.id)
        removeStudent.innerHTML = "Remove Student"
        removeStudent.addEventListener("click", (e) => deleteStudent(e))
        studentCards.appendChild(removeStudent)
    }

}

// store all the students in an array
Student.all = [];