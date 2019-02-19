//This game has 7 theta symbols and a randomly generated number to match via choosing crystals
// Each symbol should have a random number generated to it between 1 and 15
// That random num needs to be generated each time there is a win or loss
// When you click any crystal it should accumulate to total score
// Matching the randomly generated number creates a win, going over that number creates a loss. Both wins and loss resets the random number to match and those of the individual crystals.

//Wish list: Timer, animation on crystal click

// A few problems: I could never get my gifs to move when hovered over, I lost the right side boarder.


$(document).ready(function () {

    var numberToMatch;
    var losses = 0;
    var wins = 0;
    var score = 0;
    var netDiamonds = 0;
    var click = new Audio();


    // Hides body of game at open
    $('#con2').hide();
    
    // On button click shows the body of the game and hides the start button
    $('.btn').on('click', function () {
        $('#con2').show();
        $('.btn').hide();
    })

    //Create the start game function
    let restartAndStart = function () {
        //Clear the individual crystals out for next round
        $(".crystals").empty();

        // Create an array for the gif images,
        var images = [
            'assets/images/pink-diamond.gif',
            'assets/images/yellow-diamond.gif',
            'assets/images/green-diamond.gif',
            'assets/images/rainbow-diamond.gif'
        ];

        // Generates Random number between 37 and 101 for play to match
        numberToMatch = Math.ceil(Math.random() * 64) + 37;

        // Pushes the random number to match to the HTML
        $('#rnd-num-to-match').text(numberToMatch);

        // Sets score to zero 
        score = 0;
        $('#score').text(score);

        // Increments wins
        wins;
        $('#wins').text(wins + (wins === 1 ? ' diamond' : ' diamonds'));

        // Increments losses
        losses;
        $('#losses').text(losses + (losses === 1 ? ' diamond' : ' diamonds'));

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
                "background-image": "url('" + images[i] + "')",
                "background-size": "cover",

            });
            // Tried adding style the crystals div via jQuery
            $('#inner-jumbo').css('border', '4px solid turquoise');
            $('#inner-jumbo').css('border-radius', '5px');
            $('#outer-row').css('padding', '10px 25px');


            // Tried adding animation to the crystal divs via jQuery but it didn't work....
            // $('crystal').animate({bottom: '200px', top: '200px', }, 500);

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
        $('#score').html("<p>Score: " + score + "</p>");

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