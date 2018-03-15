Rails.application.routes.draw do


  namespace :api do
    get 'payments/create'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :bills, only: [:create, :show]
    resources :payments, only: [:create]
    resources :friendships, only: [:create, :show]
    get 'users/search', :to => 'users#search'
  end

  root "static_pages#root"
end
