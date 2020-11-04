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
        const studentCards = document.querySelector('#cards')

        const cardMarkup = `
            <div class="single-card" id=${this.id}>
                <h3 class="card-full-name">${this.full_name}</h3>
                <h3 class="card-email">${this.email}</h3>
                <h3 class="card-time-preference">${this.time_preference}</h3>
            </div>
        `;

        let element = document.createElement('div')
        element.innerHTML = cardMarkup
        studentCards.appendChild(element)

        // let deleteStudentCard = document.createElement('button')
        // deleteStudentCard.setAttribute("id", this.id)
        // deleteStudentCard.innerHTML = "Delete Student"

        // deleteStudentCard.addEventListener("click", (e) =>) deleteCard(e))
        // studentCards.appendChild(deleteStudentCard)
    }

}

// store all the students in an array
Student.all = [];