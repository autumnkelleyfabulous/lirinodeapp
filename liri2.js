require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require('axios');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
// var request = require('request');
// var movieName = process.argv[3];
// var liriReturn = process.argv[2];


// dets
// var title = process.argv[3];
// var nodeAargs = process.argv;
// var title = "";

// FUNCTIONS
// ===================================================


//CONCERT-THIS (with Moment.js)==============================================================
var getBands = function (artist) {
    var queryUrl = ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        axios.get(queryUrl).then(function (response) {
            var jsonData = response.data
            if (!jsonData.length) {
                console.log("Search Again!");
                return
            }

            for (var i = 0; i < jsonData.length; i++) {
                var show = jsonData[i]
                console.log(show.venue.city + (show.venue.region || show.venue.country) + moment(show.datetime).format("MM/DD/YYYY"))
            }
        })
    }









//==========================================================================


//DO-WHAT-IT-SAYS================================================================




//==========================================================================


// SPOTIFY==================================================================
// preview song from spotify-using spotify Api calls
// var spotify = new liriBot
var spotifyThisSong = function (trackName) {
    if (trackName === undefined) {
        trackName = "I Will Posses Your Heart";
    };

    // process.env.spotify
    // var trackName = process.argv[3];
    // var nodeArgs = process.argv;
    // var trackName = "";
    // songRequest = trackName;
    spotify.search({
        type: "track",
        query: trackName
    },
        function (err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return
            }
            // .then(function (response) {
            // console.log(response);
            // if (err) throw err;
            // .catch(function)(err) {

            var trackInfo = data.tracks.items;
            for (var i = 0; i < trackInfo.length; i++) {
                // if (trackInfo[i] = undefined) {
                // var spotifyResults
                console.log(i)
                console.log('Artist(s): ' + trackInfo[i].artists[0].name)
                console.log('Song Name: ' + trackInfo[i].name)
                console.log('Preview Song: ' + trackInfo[i].preview_url)
                console.log('Album: ' + trackInfo[i].album.name)
                console.log('--------------------------------------------')
            }
        }
    );
};

// if (trackName === "") {
// spotify.search({
// type: 'track',
// query: "the sign"
// })
// console.log(spotifyResults);
// console.log('');
// else {
// console.log("can't find song")
// liriBot(spotify);

//=================================================================================

// MOVIE-THIS FUNCTION===========================================================================================
var moviethis = function (movieName) {

    if (movieName === undefined) {
        movieName = 'Across The Universe';
    }
    // var nodeArgs = process.argv;

    var queryUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
    // request(queryUrl, function (error, response, body) {
    // if (error && response, statusCode === 200) {
    // console.log("anything")
    //  var myMovieData = JSON.parse(body);
    //   var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    // }

    // })

    // var movieTitle = "";

    // request(queryUrl, function(error, response,body):
    // if (error && response, statusCode === 200

    //var moviedata = Json.parse
    // title = (Title,Year,Rating,language, plot, actors);

    axios.get(queryUrl).then(
        function (response) {
            var jsonData = response.data;

            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        }
    );
};



// movie.search({
//   type: "its on Netflix!",
//  query: "Mr.Nobody"
// })
// console.log(moviethis);
// console.log('');
// }
// else {
// console.log("Mr.Nobody");
// }

//====================================================================


// SWITCH-CASE STATEMENT FOR ENTERING COMMANDS========================
var liriBot = function (userData, functionData) {
    // var command = process.argv[2];

    switch (userData) {
        // We need to add this function
        case "concert-this":
            getBands(functionData);
            break;
        case "spotify-this-song":
            spotifyThisSong(functionData);
            break;
        case "movie-this":
            moviethis(functionData);
            break;
        // We need to add this function to read .txt file
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("LIRI doesn't understand how to do that");
        // console.log("movie-this");
    }
}

//========================================================================================

// Function that takes in command line arguments and executes corresponding action
var runThis = function (argOne, argTwo) {
    liriBot(argOne, argTwo)
}

// MAIN PROCESS
// ========================================================
runThis(process.argv[2], process.argv.slice(3).join(' '))

//liriBot(moviethis);

