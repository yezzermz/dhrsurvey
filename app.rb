#DHRSurvey by Jesus Ramirez
#for Web Engineer Application

require "sinatra"

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