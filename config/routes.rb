Rails.application.routes.draw do
  # nice job implementing a root route
  root to: redirect('/zoos#/1')

  # nice job using nested resurces!
  resources :zoos do
    resources :mammals, only: [:index, :new, :create]
    resources :reptiles, only: [:index, :new, :create]
  end
  resources :mammals, except: [:index, :new, :create]
  resources :reptiles, except: [:index, :new, :create]

end
