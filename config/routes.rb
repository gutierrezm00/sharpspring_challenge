Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      get 'users/create'
      get 'users/show'
      get 'users/update'
      get 'users/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'notes/index'
      get 'notes/create'
      get 'notes/show'
      get 'notes/update'
      get 'notes/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      get 'recipes/create'
      get 'recipes/show'
      get 'recipes/destroy'
    end
  end
  root 'app#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
