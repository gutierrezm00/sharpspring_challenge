class UsersController < ApplicationController
	skip_before_action :authorized, only: [:new, :create]

  def new
		@user = User.new
  end

  def create
		@user = User.create(params.permit(:email, :password, :name))
		session[:user_id] = @user.id
		redirect_to '/notes'
  end
end
