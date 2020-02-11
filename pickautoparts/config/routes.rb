Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users do
    resources :orders do
      resources :autoparts do
        resources :reviews
      end
    end
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

  post 'password/forgot', to: 'password#forgot'
  post 'password/reset', to: 'password#reset'

end
