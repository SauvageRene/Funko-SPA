Rails.application.routes.draw do
  namespace :api do 
  resources :collections do 
    resources :funkos
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
