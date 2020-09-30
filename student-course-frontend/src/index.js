const BASE_URL = "http://localhost:3000"
const COURSES_URL = `${BASE_URL}/courses`
const STUDENTS_URL = `${BASE_URL}/students`

document.addEventListener("DOMContentLoaded", () => {
    getStudents()

})

function getStudents(){
    fetch(COURSES_URL)
    .then(resp => resp.json())
    .then(cards => {
        cards.forEach(card => {
            render(card)
        })
    })
}


function render(card){

        let container = document.querySelector('#cards');
        
        let h2 = document.createElement('h2')
        h2.innerText = card.name

        let p = document.createElement('p')
        p.innerText = card.description

        container.append(h2, p)
        
}
