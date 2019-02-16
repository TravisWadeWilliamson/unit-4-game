//This game has 7 theta symbols and a randomly generated number to match via choosing crystals
// Each symbol should have a random number generated to it between 1 and 15
// That random num needs to be generated each time there is a win or loss
// When you click any crystal it should accumulate to total score
// Matching the randomly generated number creates a win, going over that number creates a loss. Both wins and loss resets the random number to match and those of the individual crystals.

//Wish list: Timer, animation on crystal click


$(document).ready(function () {

    // set the variables for wins, losses and my score. We can do this as one variable cos a win will register as 1 win and a loss will register as 1 loss
    let counter = 0;
    let wins = 0;
    let losses = 0;
    let score = 0;

    // changed this to create a target random number between 50 and 99
    let targetNum = Math.floor(Math.random() * 50) + 50;

    // create the js to push the random number generator number to the num-to-match ID
    $('#num-to-match').text(targetNum);
    

    // create an array of the different crystals 
    let crystalVariety = [{
        name: 'red',
        image: 'assets/images/theta-red.png',
        value: 0
    },
    {
        name: 'gold',
        image: 'assets/images/theta-gold.png',
        value: 0
    },
    {
        name: 'yellow',
        image: 'assets/images/theta-yellow.png',
        value: 0
    },
    {
        name: 'green',
        image: 'assets/images/theta-green.png',
        value: 0
    },
    {
        name: 'blue',
        image: 'assets/images/theta-blue.png',
        value: 0
    },
    {
        name: 'pink',
        image: 'assets/images/theta-pink.png',
        value: 0
    },
    {
        name: 'purple',
        image: 'assets/images/theta-purple.png',
        value: 0
    }
    ]

    // Generate and assign a random number to each crystal
    for (let i = 0; i < crystalVariety.length; i++) {
        let value = Math.ceil(Math.random() * 15);
        console.log(value);
    }
// create the logic to accrue the random number to score when clicking on a crystal.
$('.crystal-img').on('click', function () {
    console.log($(this).attr('id'))

})




});