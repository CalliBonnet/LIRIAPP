console.log('this is loaded');

let spotify = {
  id: "827867f30f014855ab475008ddd2c688",
  secret: process.env.SPOTIFY_SECRET
};

module.exports(spotify); 