Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :index, :create, :edit, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :quests, only: [:index, :show, :new, :create, :edit, :update, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :follows, only: [:index, :show, :create, :destroy]
    resources :tags, only: [:index, :show, :create, :destroy]
    resources :tag_joins, only: [:index, :show, :create, :destroy]
    resources :reblogs, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  end
end
