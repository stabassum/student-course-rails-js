class StudentsController < ApplicationController

    # show all the students

    def index
        students = Student.all
        render json: StudentSerializer.new(students)
    end

    # create a new student

    def create
        student = Student.create(student_params)
        if student.save
            render json: StudentSerializer.new(student), status: :accepted
        else
            render json: {errors: student.errors.full_messages}, status: :unprocessible_entity
        end
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

    def student_params
        params.require(:student).permit(:full_name, :email, :time_preference, :course_id)
    end

end