Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :orders do
    resources :autoparts
  end

  resources :brands do
    resources :autoparts
  end
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

  # resources :autoparts do
  #   resources :brands
  # end

end
