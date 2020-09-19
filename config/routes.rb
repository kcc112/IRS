Rails.application.routes.draw do
  devise_for :users
  root 'app#index'

  namespace :api do
    namespace :v1 do

      namespace :session do
        resources :current_user, only: [:index]
        resources :roles, only: [:index, :update]
      end

      resources :enterprises, only: [:index, :show, :create, :update, :destroy]
      
      resources :issues, only: [:show, :create, :update, :destroy] do
        member do
          put :resolve_issue
          put :assign_receiver
        end
      end
      
      resources :users_informations, only: [:index, :show, :update]
      
      resources :comments, only: [:show, :create, :update, :destroy]
    end
  end

  get '*path', to: 'app#index'
end