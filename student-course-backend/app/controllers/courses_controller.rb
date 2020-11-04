class CoursesController < ApplicationController

    def index
        courses = Course.all
        render json: CourseSerializer.new(courses)
        # render json: CourseSerializer.new(courses)
    end

    def create
        course = Course.new(course_params)
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