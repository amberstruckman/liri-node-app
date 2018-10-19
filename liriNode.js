
var dotEnv = require("dotenv").config();

//Add the code required to import the `keys.js` file and store it in a variable.
var fs = require("fs");
var keys = require("./keys");
// console.log(keys);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var defaultSong; 
// //spotify

//////////////////////////////////////////////////////////////////////////////
// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: 54e741921cc54551a92719cd2a5282f9,
//   secret: 672ed21b513743f5b234ce638610ed86
// });
 
// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });

// //bands in town 32eee45bff75667395ea1333f9050e13
// var bitRequest = require('request');
// request('https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
// //omdb

// var request = require('request');
// request('http://www.omdbapi.com/?i=tt3896198&apikey=3aeec2c1', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

///////////////////////////////////////////////////////////
var action = process.argv[2];
// console.log("args: " + process.argv.slice(2));
switch (action) {
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      song(process.argv[3]);
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      randomText();
      break;
    }
    
function concert(){
    // `node liri.js concert-this <artist/band name here>`

    // * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
 
    
    //   * Name of the venue
    console.log("The concert venue is: " + VenueData.name);
    //   * Venue location
    console.log("The concert venue location is: " + VenueData.city);
    //   * Date of the Event (use moment to format this as "MM/DD/YYYY")
    console.log("The concert date is: " + Event);
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
    // spotify.request("https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE")
    //   .then(function(data) {
    //     console.log(JSON.stringify(data));
    //   }) 
    //   .catch(function(err) {
    //     console.error('Error occurred: ' + err); 
    //   });
    // spotify.search({type: "track", query: "The Sign", limit: 20})
    // .then(function(data) {
    //   console.log(JSON.stringify(data));
    //   defaultSong = data.tracks.items[0];
    //   console.log(JSON.stringify(defaultSong));
    //   // var track = data.tracks.items[0];
    //   // var artists = "Artist(s): ";
    //   // for (var i=0; i < track.artists.length; i++) {
    //   //   if (i > 0) {
    //   //     artists += ", ";
    //   //   }
    //   //   artists += track.artists[i].name;
    //   // }
    //   // console.log(artists);
    //   // console.log("Song: " + track.name);
    //   // console.log("Album: " + track.album.name);
    //   // console.log("Preview URL: " + track.preview_url );
    // });
  // spotify
  //   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  //   .then(function(data) {
  //     console.log(data); 
  //     var artists = "Artist(s): ";
  //     for (var i=0; i < data.artists.length; i++) {
  //       if (i > 0) {
  //         artists += ", ";
  //       }
  //       artists += data.artists[i].name;
  //     }
  //     console.log("Artist: " + artists);
  //     console.log("Song: " + data.name);
  //     console.log("Album: " + data.album.name);
  //   })
  //   .catch(function(err) {
  //     console.error('Error occurred: ' + err); 
  //   });
//     `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
}

function movie () {
//     This will output the following information to your terminal/bash window:

          if (condition) {
            //        * Title of the movie.
          console.log("The movie title: " + JSON.parse())
          //        * Year the movie came out.
                    console.log("Release year: " + JSON.parse())
          //        * IMDB Rating of the movie.
                    console.log("IMDB movie rating: " + JSON.parse())
          //        * Rotten Tomatoes Rating of the movie.
                    console.log("Rotten Tomatoes movie rating: " + JSON.parse())   
          //        * Country where the movie was produced.
                    console.log("Country produced: " + JSON.parse())
          //        * Language of the movie.
                    console.log("The movie language: " + JSON.parse())
          //        * Plot of the movie.
                    console.log("The movie plot: " + JSON.parse())
          //        * Actors in the movie.
                    console.log("The movie title: " + JSON.parse())
            
          } else {
            //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
            
          }




}

function randomText () {
    // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // Includes the FS package for reading and writing packages
var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }


    console.log();
    }
);


    //  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    //  * Edit the text in random.txt to test out the feature for movie-this and my-tweets

}