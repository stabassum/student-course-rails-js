class CoursesController < ApplicationController

    def index
        courses = Course.all
        render json: CourseSerializer.new(courses)
        # render json: CourseSerializer.new(courses)
    end

    def create
        course = Course.new(course_params)
        if course.save
            render json: CourseSerializer.new(course), status: :accepted
        else
            render json: {errors: course.errors.full_message}, status: :unprocessible_entity
        end
    end

    def show
        course = Course.find_by(id: params[:id])
        render json: CourseSerializer.new(course)
    end

    def destroy
        course = Course.find_by(id: params[:id])
        course.destroy
    end

    def course_params
        params.require(:course).permit(:name, :description)
    end

end