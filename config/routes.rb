MongoTemplates::Application.routes.draw do
  devise_for :users
  namespace :admin do
    resources :templates
  end
end
