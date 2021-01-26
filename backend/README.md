#classificados app - backend

#Configure MongoDB
If using Windows, MongoDB is installed at C:\Program Files\MongoDB by default.
Add C:\Program Files\MongoDB\Server\<version_number>\bin to the Path environment variable.
This change enables MongoDB access from anywhere on your development machine.


#Run The API
Open terminal in \backend\ClassifiedsAPI\ClassifiedsAPI and execute the comand;
	dotnet run
OR
Open Visual Studio and click in Run

#Test the web API
Navigate to;
	http://localhost:<port>/api/classifieds -> Get all Classifieds
	http://localhost:<port>/api/classifieds/{id here} -> Get Classifieds by Id
	
