Rails.application.routes.draw do
  root 'home#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :enterprises
    end
  end
end
