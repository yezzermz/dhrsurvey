#DHRSurvey by Jesus Ramirez
#for Web Engineer Application

require "sinatra"

# Homepage/Gets information for new survey entry
get "/" do
	erb :index
end
