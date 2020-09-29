class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students.to_json(only: [:full_name, :email, :time_preference])
    end

    def show
        student = Student.find_by(id: params[:id])
        if student
            render json: student.to_json(only: [:full_name, :email, :time_preference])
        else
            render json: {message: 'No student found with that id'}
        end
    end

    def create
        
    end

end