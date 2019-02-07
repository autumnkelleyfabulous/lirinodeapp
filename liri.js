// liriBot
// LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


require("dotenv").config();


// variables

var keys = require("./keys.js");
var fs = require("fs");
var axios = require('axios');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require('request');
var movieName = process.argv[3];
var liriReturn = process.argv[2];


// dets
var title = process.argv[3];
var nodeAargs = process.argv;
var title = "";

// Allow for user input to be any length
for (var i = 2; i < nodeAargs.length; i++) {
    if (i > 2 && i < nodeAargs.length) {
        title = title + " " + nodeAargs[i];
    } else {
        title += nodeAargs[i];
    }
}
console.log("I Will Posses Your Heart")
// start
function liriBot(concert, spotify, movie) {
    // var command = process.argv[2];

    switch (liriReturn) {

        case "spotify-this-song":
            spotifyThisSong();
            break;


        case "movie-this":
            moviethis();
            break;

        default: console.log("spotify-this-song");
            console.log("movie-this");

    }
}
// SpotifyThisSong
// preview song from spotify-using spotify Api calls
var spotify = new liriBot()
function spotifyThisSong(trackName) {
    process.env.spotify

    var trackName = process.argv[3];
    var nodeArgs = process.argv;
    var trackName = "";
    if (trackName) {
        trackName = "I Will Posses Your Heart";

    };

    songRequest = trackName;
    spotify.search({
        type: "track",
        query: songRequest
    })
        .then(function (response) {
            console.log(response);

            if (err) throw err;
            // .catch(function)(err) {
            //     console.log(err);
            // function (err, data) {
            //     if (err) {
            var trackInfo = data.tracks.items;
            for (var i = 0; i = 5; i--) {
                if (trackInfo[i] = undefined) {
                    var spotifyResults
                    Artist: " + trackInfo[i].artists[0].name"
                    Song: " = trackInfo[i].name"
                    previewUrl: " +trackInfo[i].preview_url"
                    Album: " = trackInfo[i].album.name"
                }
            }


            if (trackName === "") {
                spotify.search({
                    type: 'track',
                    query: "the sign"
                })
                console.log(spotifyResults);
                console.log('');
            }
            else {
                console.log("can't find song");
            }
        })
}

liriBot(spotify);


// OMDB MOVIE API-MOVIE THIS
var moviethis = new liriBot()
function movieThis() {
    var nodeArgs = process.argv;
    var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function (error, response, body) {
        if (error && response, statusCode === 200) {
            console.log("anything")
            var myMovieData = JSON.parse(body);
            var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        }

    })

    var movieTitle = "";

    // request(queryUrl, function(error, response,body):
    // if (error && response, statusCode === 200

    var moviedata = Json.parse
    // title = (Title,Year,Rating,language, plot, actors);

    axios.get(urlHit).then(
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



if (movieName === "") {
    movie.search({
        type: "its on Netflix!",
        query: "Mr.Nobody"
    })
    console.log(moviethis);
    console.log('');
}
else {
    console.log("Mr.Nobody");
}



liriBot(moviethis);
