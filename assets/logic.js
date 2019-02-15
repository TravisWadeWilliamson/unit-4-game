$(document).ready(function () {

    //begin game
    // target score adn display
    // on each click display the current score

    // changed this create a target number create a target random number 50 and 78
    let targetNum = Math.floor(Math.random() * 29) + 50;

    // create an array of the different crystals 
    let crystalColors = [{
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
    
    const usedNums = [];
// higher order function doesn't target a specific index
    crystalColors.forEach(color => {
        var randomCrystalNum = Math.ceil(Math.random() * 15);
        console.log(randomCrystalNum);
    })
    // assign a random number to each crystal

    // create the js to push the random number generator number to the num-to-match ID
    $('#num-to-match').text(targetNum);

    // create an counter
    let counter = 0;
    //create onclick function to increase the counter and alert the score
    $(".crystal-img").on("click", function () {
        counter += 25;
        alert(`Your score: ${counter}.`)
        // create the logic for a win
        if (counter === targetNum) {
            alert(`Winnner!`);
        }
        // create the logic for a loss
        else if (counter >= targetNum) {
            alert(`You lose!`)
        }
    });

});