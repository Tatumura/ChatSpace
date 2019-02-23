
Rails.application.routes.draw do
  devise_for :users
<<<<<<< Updated upstream
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
=======
  root 'messages#index'
  resources :users, only: [:edit, :update]
>>>>>>> Stashed changes
end
