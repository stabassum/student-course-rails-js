class CoursesController < ApplicationController

    def index
        courses = Course.all
          render json: courses.to_json(:include => {:students => {:only => [:full_name, :email, :time_preference]}}, :except => [:created_at, :updated_at])
        # render json: CourseSerializer.new(courses)
    end

    def show
        course = Course.find_by(id: params[:id])
        
        if course
            render json: course.to_json(:include => {:students => {:only => [:full_name, :email, :time_preference]}}, :except => [:created_at, :updated_at])
        else
            render json: {message: 'No course found with that id'}
        end

    end

    def create

    end

end