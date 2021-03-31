Rails.application.routes.draw do
	
	root :to => "sessions#new"

  resources :users, only: [:new, :create]
	resource :notes, only: [:index, :new, :create, :destroy, :update]

	get '/notes', to: 'notes#index'
	
	# post '/notes/destroy', to: 'notes#destroy'
	# post '/notes/delete', to: 'notes#destroy'

	get '/login', to: 'sessions#new'


	post '/login', to: 'sessions#create'

	delete '/log_out', to: 'sessions#destroy'

	get 'welcome', to: 'sessions#welcome'

	get 'authorized', to: 'sessions#page_requires_login'

end
