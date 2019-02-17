//This game has 7 theta symbols and a randomly generated number to match via choosing crystals
// Each symbol should have a random number generated to it between 1 and 15
// That random num needs to be generated each time there is a win or loss
// When you click any crystal it should accumulate to total score
// Matching the randomly generated number creates a win, going over that number creates a loss. Both wins and loss resets the random number to match and those of the individual crystals.

//Wish list: Timer, animation on crystal click/ start button


$(document).ready(function () {

    // set the variables for wins, losses and my score. We can do this as one variable cos a win will register as 1 win and a loss will register as 1 loss
    let targetNum;
    let wins = 0;
    let losses = 0;
    let score;
    // create an array of the different crystals 

    const crystalVariety = {
        red: 0,
        gold: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        pink: 0,
        purple: 0
    }
//MICHAL'S HELP!!!
    // Create a start game function
    function start() {

        // set targetNum to random number between 50 and 99
        targetNum = Math.floor(Math.random() * 50) + 50;
        
        // set score to 0
        score = 0;

        // create the js to push the random number generator number to the num-to-match ID
        $('#num-to-match').text(targetNum);
        // document.getElementById('num-to-match').textContent = targetNum;
        
        // Generate and assign a random number to each crystal
        for (let color in crystalVariety) {
            crystalVariety[color] = Math.ceil(Math.random() * 15);
        }
    };

    //when the win or loss is going to reset the target number and score should be reset 0
    start();
        
    // create the logic to accrue the random number to the score when clicking on a crystal.
    $('.crystal-img').on('click', function () {
        const currId = $(this).attr('id');
        console.log(currId, crystalVariety[currId]);

        score += crystalVariety[currId];
        console.log(score);

        //if the score = the targetNum then we increase wins by one
        if (score === targetNum) {
            console.log('you win');
        } else if (score > targetNum) {
            console.log('you lose');
        };
        //if the score > the targetNun then we increase the losses by one
    
    })


//To accrue the points from each crystal to the score first we create the onclick
    // Originally we had the crystal onclick function. But in jQuery, when an element is emptied and a new one created, the button will no longer be able to listen to any new element created on the DOM. There is something in jQuery called EVENT DELEGATION. In this case we need to use actually listen to the DOM via 'document' and then pass in the new or old element '.crystal' that should be listened to.
    // $(".crystal").on('click', function () {

});