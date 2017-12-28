Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:index, :show, :destroy, :edit, :update]
  resources :projects
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index]
    end
  end

end
