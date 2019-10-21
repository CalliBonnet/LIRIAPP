//this hides my spotify keys 
// const env = require("dotenv").config();

//this holds my spotify keys
// var keys = require("./keys.js");

//this created a varbile for my Spofity Keys 
// var spotify = new Spotify(keys.spotify);


//Bands in Town API Key and End Point 
let BandsInTown = {
    apiKey: 'codingbootcamp',
    endpoint: 'https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp'
  };

//This is the template for your searched bands 
  function searchedBand (bandName, venueName, venueLocation, eventDate) {

    console.log('============= Start of Band ============='); 
    
    this.bandName = bandName;  
    this.venueName = venueName; 
    this.venueLocation = venueLocation; 
    this.eventDate = eventDate;
}
//this is where you will dymanically create content based on the API 
let band = new searchedBand ("band name", "vanue name", "venue location", "event date")

//this is displaying the band details in the console 
console.log(band); 


//this is the 3rd place on the command line 
const commandLine =  process.argv[2]; 
//when the 4th place on the command line is a band name 
let bandName = process.argv[3]; 



bandDetials = function() {
    if(commandLine === 'concert-this') {
        console.log("this is working")
        console.log(bandName); 
      
    } else {
        console.log("this is NOT working")
    }
}

bandDetials(); 







