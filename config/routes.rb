Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :bill, only: [:create]
    get 'users/search', :to => 'users#search'
  end

  root "static_pages#root"
end
