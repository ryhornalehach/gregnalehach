class ProjectsController < ApplicationController
  before_action :authorize_user, except: [:new, :create]

  def show
    @project = Project.find(params[:id])
  end

  def index
    @projects = Project.all
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      redirect_to project_path(@project), notice: "Project updated"
    else
      redirect_to project_path(@project), notice: "Failed to Update!"
    end
  end

  def new
    @project = Project.new
  end

  def create
    @new_project = Project.new(project_params)
    if @new_project.save
      redirect_to root_path, notice: "Project was successfully submitted."
    else
      redirect_to root_path, notice: "Project not submitted due to an error in the submitted form."
    end
  end

  def destroy
    @project = Project.find(params[:id]).destroy
    redirect_to projects_path, notice: "Project deleted"
  end

  private

  def authorize_user
    if !current_user || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def project_params
    params.require(:project).permit(:name, :url, :description, :photo, :video, :developing, :date)
  end
end
