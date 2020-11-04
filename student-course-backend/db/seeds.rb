# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

software_engineering = Course.create(name: "Software Engineering Bootcamp", description: "250 hours full-stack development")

cybersercurity = Course.create(name: "Cybersecurity Bootcamp", description: "250 hours  security concepts and applications")

data_science = Course.create(name: "Data Science Bootcamp", description: "250 hours covering sql, python, and R Programming")

john_doe = Student.create(full_name: "John Doe", email: "jdoe@gmail.com", time_preference: "Morning", course_id: software_engineering.id)

jane_doe = Student.create(full_name: "Jane Doe", email: "jdoe@outlook.com", time_preference: "Afternoon", course_id: cybersercurity.id)

anne_doe = Student.create(full_name: "Anne Doe", email: "adoe@yahoo.com", time_preference: "Evening", course_id: data_science.id)

frank_doe = Student.create(full_name: "Frank Doe", email: "fdoe@yahoo.com", time_preference: "Evening", course_id: software_engineering.id)

mary_anne = Student.create(full_name: "Mary Anne", email: "example@yahoo.com", time_preference: "Morning", course_id: software_engineering.id)


# run the rails console to view all of the students for a particular bootcamp
# the following command for instance will show all of the students for the software engineering bootcamp, which are two students
# Course.find_by(id: 1).students