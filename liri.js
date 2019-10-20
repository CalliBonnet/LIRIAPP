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


//When the user types 'concert-this', it will call this funcation
const commandLineBands =  process.argv[2]; 

bandDetials = function() {
    if(commandLineBands === 'concert-this') {
        console.log("this is working")
      
    } else {
        console.log("this is NOT working")
       
    }
}

bandDetials(); 







