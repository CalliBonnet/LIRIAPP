
//require for the program to run 
require("dotenv").config();
let fs = require("fs");
let moment = require("moment");

let axios = require("axios");
let Spotify = require("node-spotify-api");

const spotifyKeys = require("./keys");




//concert-this API 
let concertQueryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

console.log(concertQueryURL);

axios
    .get(concertQueryURL)
    .then(function (bandFetch) {
        console.log("Venue: " + bandFetch.data[0].venue.name);
        console.log("City: " + bandFetch.data[0].venue.city);
        console.log(moment(bandFetch.data[0].datetime).format("MM/DD/YYYY"));
    }
    );



//spotify-this-song API 
let spotify = new Spotify({
    id: spotifyKeys["spotify"].id,
    secret: spotifyKeys["spotify"].secret
});

spotify
    .request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function (err, songResponse) {
        if (err) {
            return console.log(err);
        }
        console.log("Artist: " + songResponse.tracks.item[0].artist[0].name);
        console.log("Song: " + songResponse.tracks.item[0].name);
        console.log("URL: " + songResponse.tracks.item[0].preview_url);
        console.log("Album: " + songResponse.tracks.item[0].album.name);
    });


//movie-this API 
let movieQureyURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


axios
    .get(movieQureyURL)
    .then(function (movieFetch) {
        console.log("Title: " + movieFetch.data.Title);
        console.log("Year: " + movieFetch.data.Year);
        console.log("Rated: " + movieFetch.data.imdbRating);
        console.log("Country: " + movieFetch.data.Country);
        console.log("Language: " + movieFetch.data.Language);
        console.log("Plot: " + movieFetch.data.Plot);
        console.log("Actors: " + movieFetch.data.Actors);
        console.log("Rotten Tomatoes: " + movieFetch.data.Ratings[1].Value);
    }
    );




//this is going to capture the user's input 
let userInput = process.argv;

//this is the funcition that will run the concert-this 
function bandDetials() {
    let bandName = "";
    for (let i = 3; i < userInput.length; i++) {
        if (i > 3 && userInput.length) {
            bandName = bandName + "+" + userInput[i];
        } else {
            bandName += userInput[i];
        }
    }
};


//this is the functiion that will run the spotify 
function songDetials() {
    let songName = "";
    for (let i = 3; i < userInput.length; i++) {
        if (i > 3 && userInput.length) {
            songName = songName + "+" + userInput[i];
        } else {
            songName += userInput[i];
        }
    }
};

//this is the funcation that will run the movie-this 
function movieDetials() {
    let movieName = "";
    for (let i = 3; i < userInput.length; i++) {
        if (i > 3 && userInput.length) {
            movieName = movieName + "+" + userInput[i];
        } else {
            movieName += userInput[i];
        }
    }
};


//this is going to capture the user's command ex: movie-this 
let userComandLine = process.argv[2];

//this is going to run the right funcation 
if (userComandLine === "concert-this") {
    bandDetials();
} else {
    return;
}


if (userComandLine === "spotify-this-song") {
    songDetials();
} else {
    return;
}


if (userComandLine === "movie-this") {
    movieDetials();
} else {
    return;
}