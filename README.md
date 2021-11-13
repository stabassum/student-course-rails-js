# Front-End Project : Student-Course-Rails-JavaScript

## Draft Diagram of Application / About This Application
![rails_js_project (1)](https://user-images.githubusercontent.com/20411568/96211711-0d949980-0f43-11eb-8b02-cd0a2b580c78.png)

## Starting the Application

This application can be run locally. Make sure <a href="https://rubyonrails.org">Rails</a> is installed. Once Rails is installed, navigate to the Rails back end folder located at : `./student-course-backend` and run the following commands in your terminal:
1. `bundle install`
2. `rails db:migrate`
3. `rails db:seed`
4. `rails s` To get the rails server running
5. change directory (cd) to `./student-course-frontend` and double-click `index.html` 

## What The Application is Supposed to Accomplish for the User

1. Allow the "Admin" (user) to view all of the students registered for a particular course
2. Allow the "Admin" to register a student for a particular course 
3. Allow the "Admin" to delete a particular student registered for a particular course

## Project File Structure
```
student-course-rails-js
├── student-course-backend
│   ├── app
│   │   ├── controllers
│   │   │   ├── courses_controller.rb
│   │   │   └── students_controller.rb
│   │   ├── models
│   │   │   ├── course.rb
│   │   │   └── student.rb
│   │   └── views
│   └── db
│       ├── migrate
│       │   ├── 20200928184552_create_courses.rb
│       │   └── 20200928184626_create_students.rb
│       ├── schema.rb
│       └── seeds.rb
│
├── student-course-frontend
│   ├── src
│   │   ├── course.js
│   │   ├── index.js
│   │   └── student.js
│   ├── style
│   │   └── style.css
│   └── index.html
└── README.md
```
