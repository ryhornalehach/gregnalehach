class Api::V1::ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
      projects = []
      Project.all.each do |project|
        projects << project
      end
      render json: { projects: projects }
  end

end
