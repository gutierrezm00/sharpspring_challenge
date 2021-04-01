class NotesController < ApplicationController

	def index
    @notes = current_user.notes
	end

	def new
		@note = Note.new
	end

	def show
		@note = Note.find_by(params[:id])
	end

	def create

		puts "TRYING TO CREATE NOTE"
		puts "params: #{params["/notes"]}"
		newNote = {title: params["/notes"][:title], body: params["/notes"][:body], user_id: current_user[:id]}

		puts "newNotes #{newNote}"


		@note = Note.create(newNote)
		redirect_to '/notes'
	end

	def destroy
		@note = Note.find_by(params[:id])
		@note.destroy
		redirect_to '/notes'
	end


end
