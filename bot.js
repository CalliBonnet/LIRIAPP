import { ftruncateSync } from "fs";

require("dotenv").config(); 
let fs = require("fs"); 
let moment = require("moment"); 

let axios = require("axios"); 
let Spotify = require("node-spotify-api"); 
let spotifyKeys = require("./keys"); 



//this is the Bands In Town API 
let bandQueryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

console.log(bandQueryURL);

axios
    .get(bandQueryURL)
    .then(function (fetchedBand) {
        console.log("Venue: " + fetchedBand.data[0].venue.name);
        console.log("City: " + fetchedBand.data[0].venue.city);
        console.log(moment(fetchedBand.data[0].datetime).format("MM/DD/YYY"));
    }
    );

//This is the Movie API 
let movieQueryURL = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

axios
    .get(movieQueryURL)
    .then(function (fetchMovie) {
        console.log('++++++++++ Your Movie Info ++++++++++++++');
        console.log("Movie Title: " + fetchMovie.Title);
        console.log("Release Year: " + fetchMovie.Year);
        console.log("IMdB Rating: " + fetchMovie.imdbRating);
        console.log("Country: " + fetchMovie.Country);
        console.log("Language: " + fetchMovie.Language);
        console.log("Plot: " + fetchMovie.Plot);
        console.log("Actors: " + fetchMovie.Actors);
    }
    );




let userInput = process.argv;
let userCommand = process.argv[2];

switch (userCommand) {
    case "concert-this":
        bandDetials();
        break;
    case "movie-this":
        movieDetails();
        break;

};


//this is the funcation for concert-this
function bandDetials() {
    let bandName = " ";

    for (let i = 3; i < userInput.length; i++) {
        if (i > 3 && i < userInput.length) {
            bandName = bandName + "+" + userInput[i];
        } else {
            bandName += userInput[i];
        }
    }
};

//this is the funccation for movie-this 
function movieDetails() {
    let movieName = " ";

    for (let i = 3; i < userInput.length; i++) {
        if (i > 3 && i < userInput.length) {
            movieName = movieName + "+" + userInput[i];
        } else {
            movieName += userInput[i];
        }
    }

};