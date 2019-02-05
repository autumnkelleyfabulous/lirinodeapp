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

            var trackName = process.argv(3);
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
