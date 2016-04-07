Rails.application.routes.draw do
  root to: redirect('/zoos#/1')

  resources :zoos do
    resources :mammals, only: [:index, :new, :create]
    resources :reptiles, only: [:index, :new, :create]
  end
  resources :mammals, except: [:index, :new, :create]
  resources :reptiles, except: [:index, :new, :create]

end
