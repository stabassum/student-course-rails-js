class StudentsController < ApplicationController

    # show all the students

    def index
        students = Student.all
        render json: StudentSerializer.new(students)
    end

    # show an individual record

    def show
        student = Student.find_by(id: params[:id])
        render json: StudentSerializer.new(student)
    end

    # delete a student record from the database

    def destroy
        student = Student.find_by(id: params[:id])
        student.destroy
    end

end