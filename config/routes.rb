MongoTemplates::Application.routes.draw do
  devise_for :users

  namespace :admin do
    resources :templates do
      collection do
        get  :ajax_new
        post :save_template
      end
    end
  end

end
