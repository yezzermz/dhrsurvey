#DHRSurvey by Jesus Ramirez
#for Web Engineer Application

#Required for sinatra and data mapper entries
require "sinatra"
require 'data_mapper'

#Database setup
if ENV['DATABASE_URL']
  DataMapper::setup(:default, ENV['DATABASE_URL'] || 'postgres://localhost/mydb')
else
  DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/app.db")
end

#Patient Data class
class PatientInfo
	include DataMapper::Resource
	property :pat_id, Serial												#Object ID
	property :pat_first, Text												#Contains Patients First Name
	property :pat_last, Text												#Contains Patients Last Name
	property :pat_phone, Text												#Patients Phone #
	#property :pat_rating, Integer, :default =>0		#Contains patients visit rating (for linking to survey input if needed)
end

#Ratings Class
class Ratings
	include DataMapper::Resource
	property :rating_id, Serial											#Object ID
	#property :user_id, Integer											#Surveys should be annonymous but can be linked to patientID if needed.
	property :rating, Integer, :default => 0				#Rating 1-3 (1 = Bad, 2 = Neutral, 3 = Good)
end

#Database finalize
DataMapper.finalize
PatientInfo.auto_upgrade!
Ratings.auto_upgrade!

# Homepage/Gets information for new survey entry
get "/" do
	erb :index
end

# Creates database entries after user input
post "/new_survey/create" do
	#if user phone# already in database reject survey and inform user feedback had already been received

	#if user information not stored save and submit
	redirect "/thanks"
end

# Thanks user for submitting survey feedback
get "/thanks" do
	erb :thanks
end

# About Page
get "/about" do
	erb :about
end