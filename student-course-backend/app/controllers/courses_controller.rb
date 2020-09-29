class CoursesController < ApplicationController

    def index
        courses = Course.all
        render json: courses.to_json(only: [:name, :description])
    end

    def create

    end

    

end