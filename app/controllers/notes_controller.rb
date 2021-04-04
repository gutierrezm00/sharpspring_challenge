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


		puts "length of title: #{params["/notes"][:title].length()}"
		puts "lengh of body: #{params["/notes"][:body].length()}"

		title = params["/notes"][:title]
		body = params["/notes"][:body]

		if(title.length() == 0 && body.length() == 0)
			flash[:notice] = 'Cannot create note with no content.'
			redirect_to '/notes' and return
		end


		if(title.length() == 0)
			title = body[0..30]
		end
		
		newNote = {title: title, body: body, user_id: current_user[:id]}

		# puts "newNotes #{newNote}"

		@note = Note.create(newNote)
		redirect_to '/notes' and return
	end

	def destroy
		@note = Note.find_by(params[:id])
		@note.destroy
		redirect_to '/notes'
	end


end
