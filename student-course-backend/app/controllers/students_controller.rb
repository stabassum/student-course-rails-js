class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students.to_json(only: [:full_name, :email, :time_preference])
    end

    def create
        
    end

end
