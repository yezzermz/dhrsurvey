#DHRSurvey by Jesus Ramirez
#for Web Engineer Application

require "sinatra"

# Homepage/Gets information for new survey entry
get "/" do
	erb :index
end

# Creates database entries after user input
post "/new_survey/create" do
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