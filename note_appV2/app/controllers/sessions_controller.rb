class SessionsController < ApplicationController

	skip_before_action :authorized, only: [:new, :create, :welcome]

  def new
		
  end

  def create
		@user = User.find_by(email: params[:email])

		if @user && @user.authenticate(params[:password])

			session[:user_id] = @user.id

			redirect_to '/authorized'

		else
			flash[:notice] = 'Email or password incorrect.'
			redirect_to '/login'
		end
  end

  def login
  end

  def welcome

  end

	def page_requires_login
		redirect_to '/notes'

	end

	def destroy
		reset_session
		@user = nil
		redirect_to '/login'
	end


end
