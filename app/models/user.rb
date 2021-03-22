class User < ApplicationRecord
	validates :name, presence: true
  validates :email, presence: true
  validates :validated, presence: true
	validates :username, presence: 
	validates :passwordhash, presence: true
	validates :passwordsalt, presence: true
	
end
