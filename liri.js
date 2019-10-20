//this hides my spotify keys 
const env = require("dotenv").config();
//this holds my spotify keys
var keys = require("./keys.js");
//this created a varbile for my Spofity Keys 
var spotify = new Spotify(keys.spotify);