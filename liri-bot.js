// require("dotenv").config(); 

//required items 
var keys = require("./keys.js"); 
var fs = require("fs"); 
var request = require("request"); 
var spotify = require('node-spotify-api'); 

//this is capturing the user's command ---> concert-this
let commandLine = process.argv[2]; 
//ths is capturig what the user types after the command line 
let userSearch = process.argv[3]; 

//when the user types more than one word 
for (let i = 4; i < process.argv.length; i++) {
    userSearch += '+' + process.argv[i]; 
}



//This is going to trak what the user says and then run the corasponding function 
function doWhatTheUserSays(commandLine) {

switch (commandLine) {

    case 'movie-this':
    fetchMovie(); 
    break; 

    case 'spotify-this-song': 
    fetchSpotify(); 
    break; 

}


//Movies 
function fetchMovie() {
    //this is re-declaring userSearch with the movie name that the user types in 
let NameofMovie = userSearch; 

//this is my MovieAPI key 
let movieAPIKey = "e038599e"; 
//this is the movie API endpoint 
let movieAPIendpoint = "http://www.omdbapi.com/?t=" + NameofMovie + "&apikey=" + movieAPIKey; 


request(movieAPIendpoint, function(err, responce, body){

    if(err && responce.statusCode === 200) {
        let body = JSON.parse(body); 
        console.log('++++++++++ Your Movie Info ++++++++++++++'); 
        console.log("Movie Title: " + body.Title); 
        console.log("Release Year: " + body.Year); 
        console.log("IMdB Rating: " + body.imdbRating); 
        console.log("Country: " + body.Country); 
        console.log("Language: " + body.Language); 
        console.log("Plot: " + body.Plot); 
        console.log("Actors: " + body.Actors); 

    }else{
        //if the request was not successful, we will throw an error 
        console.log("An error has occoured... try again"); 

    }
}); 

}
//end of Movies 






    //end of the complete switch funcation 
}; 

doWhatTheUserSays(commandLine); 