class CoursesController < ApplicationController

    def index
        courses = Course.all
        render json: courses.to_json(only: [:name, :description])
    end

    def show
        course = Course.find_by(id: params[:id])
        if course
            render json: course.to_json(only: [:name])
        else
            render json: {message: 'No course found with that id'}
        end
    end

    def create

    end

end