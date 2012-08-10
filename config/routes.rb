MongoTemplates::Application.routes.draw do
  devise_for :users

  namespace :admin do
    resources :templates do
      collection do
        get  :ajax_new
      end
    end
  end

end
