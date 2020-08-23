Rails.application.routes.draw do
  root 'home#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :enterprises, only: [:index]
      resources :issues, only: [:index]
      resources :users, only: [:index]
      resources :users_informations, only: [:index]
      resources :comments, only: [:index]
    end
  end
end
