//this hides my spotify keys 
// const env = require("dotenv").config();

//this holds my spotify keys
// var keys = require("./keys.js");

//this created a varbile for my Spofity Keys 
// var spotify = new Spotify(keys.spotify);

console.log('LIRI Bot is loading');


//Bands in Town API Key and End Point 

let BandsInTown = {
    apiKey: 'codingbootcamp',
    endpoint: 'https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp'
  };


  function searchedBand (bandName, venueName, venueLocation, eventDate) {
    
    this.bandName = bandName;  
    this.venueName = venueName; 
    this.venueLocation = venueLocation; 
    this.eventDate = eventDate;

}

const commandLineBands =  process.argv[2]; 


bandDetials = function() {
    if(commandLineBands === 'concert-this') {
        console.log("this is working")
      
    } else {
        console.log("this is NOT working")
       
    }
}

bandDetials(); 

// console.log(bandDetials()); 

// let bands = new searchedBands("band name", "vanue name", "venue location", "event date")

// console.log(bands); 

