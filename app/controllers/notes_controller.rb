class NotesController < ApplicationController

	def index
    @notes = current_user.notes
		return @notes
	end

	def new
		@note = Note.new
	end

	def show
		@note = Note.find_by(params[:id])
	end

	def create

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

		@note = Note.create(newNote)
		redirect_to '/notes' and return
	end

	def update 

		if(params[:update])
			title = params[:title]
			body = params[:body]

			if(title.length() == 0 && body.length() == 0)
				flash[:notice] = 'Cannot create note with no content.'
				redirect_to '/notes' and return
			end
	
			if(title.length() == 0)
				title = body[0..30]
			end
			
			@note = Note.find_by(id: params[:id])
			@note.update(title: params[:title], body: params[:body])
			@note.save

			flash[:status] = 'Note updated!'
			redirect_to '/notes' and return

		elsif(params[:delete])
			@note = Note.find_by(id: params[:id])
			@note.destroy
			flash[:status] = 'Note deleted!'
			redirect_to '/notes' and return
		end

	end

	def destroy
		puts "destroy params: #{params}"
		@note = Note.find_by(id: params[:id])
		@note.destroy
		redirect_to '/notes'
	end


end
