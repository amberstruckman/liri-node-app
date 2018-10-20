
var dotEnv = require("dotenv").config();


var fs = require("fs");
var keys = require("./keys");
// console.log(keys);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");

var action = process.argv[2];
var searchTerm = process.argv[3];
// console.log("args: " + process.argv.slice(2));
function command(action, searchTerm) {
  switch (action) {
    case "concert-this":
      concert(searchTerm);
      break;
    
    case "spotify-this-song":
      song(searchTerm);
      break;
    
    case "movie-this":
      movie(searchTerm);
      break;
    
    case "do-what-it-says":
      randomText(searchTerm);
      break;
    }
}
command(action, searchTerm);
    
function concert(artist){
    // `node liri.js concert-this <artist/band name here>`
  
  request(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`, 
    function (error, response, body) {
      if (error) {
        console.log('error:', error); // Print the error if one occurred
        return;
      }
      console.log("artist: " + artist);
      var results = JSON.parse(body);
      for(var i=0; i<results.length; i++) {
        console.log("event: " + results[i].description);
        console.log("venue: " + results[i].venue.name);
        console.log("location: " + results[i].venue.city + ", " + results[i].venue.region + " " + results[i].venue.country);
        console.log("date: " + results[i].datetime);
      }
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
      // console.log(JSON.stringify(body));
    });
}

function song(trackName) {
  

  spotify.search({type: "track", query: trackName || "The Sign", limit: 1})
    .then(function(data) {
      var track = data.tracks.items[0];
      var artists = "Artist(s): ";
      for (var i=0; i < track.artists.length; i++) {
        if (i > 0) {
          artists += ", ";
        }
        artists += track.artists[i].name;
      }
      console.log(artists);
      console.log("Song: " + track.name);
      console.log("Album: " + track.album.name);
      console.log("Preview URL: " + track.preview_url );
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    });
    
}

function movie (movieTitle) {
  // var url = "http://www.omdbapi.com/?apikey=trilogy&type=movie&t=" + movieTitle;
  // console.log(url);
  request(
    "http://www.omdbapi.com/?apikey=trilogy&type=movie&t=" + (movieTitle || "Mr. Nobody"),
    function (error, response, body) {
      if (error) {
        console.log('error:', error); // Print the error if one occurred
        return;
      }
      var results = JSON.parse(body);
      // console.log(JSON.stringify(body));
//   //        * Title of the movie.
          console.log("The movie title: " + results.Title);
          // //        * Year the movie came out.
                    console.log("Release year: " + results.Year);
          // //        * IMDB Rating of the movie.
                    console.log("IMDB movie rating: " + results.imdbRating);
          // //        * Rotten Tomatoes Rating of the movie.
          if (results.Ratings) {
            for (var i=0; i < results.Ratings.length; i++) {
              // consle.log(JSON.stringify(results[Ratings[i]]));
              if (results.Ratings[i].Source === "Rotten Tomatoes") {
                console.log("Rotten Tomatoes movie rating: " + results.Ratings[i].Value);   
              }
            }
          }
          // //        * Country where the movie was produced.
                    console.log("Country produced: " + results.Country);
          // //        * Language of the movie.
                    console.log("The movie language: " + results.Language);
          // //        * Plot of the movie.
                    console.log("The movie plot: " + results.Plot);
          // //        * Actors in the movie.
                    console.log("The movie's actors: " + results.Actors)
            
          
     

    });
  




}

function randomText () {
   
var fs = require("fs");


fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  var lines = data.split("\n");
  var commands = lines[0].split(",");
  command(commands[0], commands[1]);
});



}