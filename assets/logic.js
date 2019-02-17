//This game has 7 theta symbols and a randomly generated number to match via choosing crystals
// Each symbol should have a random number generated to it between 1 and 15
// That random num needs to be generated each time there is a win or loss
// When you click any crystal it should accumulate to total score
// Matching the randomly generated number creates a win, going over that number creates a loss. Both wins and loss resets the random number to match and those of the individual crystals.

//Wish list: Timer, animation on crystal click


$(document).ready(function () {

    var numberToMatch;
    var losses = 0;
    var wins = 0;
    var score = 0;

    //Create the start game function
    let restartAndStart = function () {

        //Clear the individual crystals out for next round
        $(".crystals").empty();

        // Create an array for the images,
        var images = [
            'assets/images/green-diamond.gif',
            'assets/images/pink-diamond.gif',
            'assets/images/yellow-diamond.gif',
            'assets/images/rainbow-diamond.gif'
        ];

        // Generates Random number between 37 and 101 for play to match
        numberToMatch = Math.ceil(Math.random() * 64) + 37;

        // Pushes the random number to match to the HTML
        $('#rnd-num-to-match').html("<h2>Number to Match: " + numberToMatch + "</h2>");

        // Sets score wins losses to 
        score = 0;
        $('#score').html("<h2>Score: " + score + "</h2>");

        wins;
        $('#wins').html("<h2>" + wins + (wins === 1 ? ' Win' : ' Wins') + "</h2>");

        losses;
        $('#losses').html("<h2>" + losses + (losses === 1 ? ' Loss' : ' Losses') + "</h2>");

        // Creates a random number for each crystal between 1 and 15
        for (let i = 0; i < 4; i++) {
            let individualCrystalNum = Math.ceil(Math.random() * 15);

            // Creates a new div for each of the individual crystals to live in
            let crystal = $('<div>');

            // Assigns some attributes to the individual crystals       
            crystal.attr({
                "class": 'crystal',
                "data_rndNumCrys": individualCrystalNum
            });
            //Add gifs to page
            crystal.css({
                "background-image":"url('" + images[i] + "')",  
                "bacground-size": "cover"             
            });

            // Puts the dynamically created crystal div INTO the parent crystals div
            $('.crystals').append(crystal);

        }
    }
    // Calls the startGameReset function
    restartAndStart();

    //To accrue the points from each crystal to the score first we create the onclick
    $(document).on('click', ".crystal", function () {


        //Now we store the value we pull above into a variable, but we have to turn it into a number via parseInt
        var individualCrystalNum = parseInt($(this).attr('data_rndNumCrys'));

        score += individualCrystalNum;
        $('#score').html("<h2>Score: " + score + "</h2>");

        //if the score is equal to the number to match then push that to the html and increment the wins
        if (score === numberToMatch) {
            wins++;
            restartAndStart();

            // if the score is greater than the number to match push that to the html and increment the loss
        } else if (score > numberToMatch) {
            losses++;
            restartAndStart();

        }
    })
});