Rails.application.routes.draw do
  devise_for :users, skip: :registrations
  devise_scope :user do
    get '/users/sign_up', :to => 'devise/registrations#new', :as => 'new_user_registration'
    post '/users', :to => 'devise/registrations#create', :as => 'user_registration'
  end
  root 'app#index'

  namespace :api do
    namespace :v1 do

      namespace :session do
        resources :current_user, only: [:index]
        resources :roles, only: [:index, :update]
      end

      resources :enterprises, only: [:index, :show, :create, :update, :destroy]
      
      resources :issues, only: [:index, :show, :create, :update, :destroy] do
        member do
          put :resolve_issue
          put :assign_receiver
        end
        get :issue_types, on: :collection
      end
      
      resources :users_informations, only: [:index, :show, :update]
      
      resources :comments, only: [:show, :create, :update, :destroy] do
        get :issues_list, on: :collection, param: :id
      end

      resources :users, only: [:deactivate, :activate] do
        member do
          put :deactivate
          put :activate
          put :assign_user_to_enterprise
        end
      end
    end
  end

  get '*path', to: 'app#index'
end