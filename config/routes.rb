Rails.application.routes.draw do
  devise_for :users
  root 'app#index'
  get '*path', to: 'app#index'

  namespace :api do
    namespace :v1 do
      resources :enterprises, only: [:index, :show, :create, :update, :destroy]
      
      resources :issues, only: [:show, :create, :update, :destroy] do
        member do
          put :change_status
        end
      end
      
      resources :users, only: [] do
        member do
          put :change_role
        end
      end
      
      resources :users_informations, only: [:index, :show, :create, :update]
      
      resources :comments, only: [:show, :create, :update, :destroy]
    end
  end
end