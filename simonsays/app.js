const start = $('#button');
const redDiv = document.querySelector('#red');
const blueDiv = document.querySelector('#blue');
const greenDiv = document.querySelector('#green');
const yellowDiv = document.querySelector('#yellow');
const colorDivs = $('.color');
let roundNum = 0;
let userClicks = 0;
let shown = [];
let clickedColors = [];
const colors = ['red', 'yellow', 'blue', 'green'];
//default message
$('#message').html(`Click Start To Begin`);
//start game when start button clicked.
$('button').click(function() {
 play();
 $('#message').html(`Click on colors to repeat the sequence shown`);
  });
//starts the game.
function play() {
  //creates a random number between 0 and 3. picks a color corresponding to number from colors array and pushes it into shown array.
  let randColor = Math.floor((Math.random() * colors.length));
  shown.push(colors[randColor]);
  console.log('shown: ', shown);
  //delay before sequence is shown to player.
  setTimeout(blinkSequence, 1000);
  //call the function that records player's response clicks.
  pushResponse();
}

//function that tells game to blink for each color in shown array.
//Delay is increased with each array element to get consecutive blinks.
function blinkSequence() {
  for (i = 0; i < shown.length; i++) {
    if (shown[i] === 'red') {
      setTimeout(function () {
      $('#red').addClass('red-lit');
      setTimeout(function () {
      $('#red').removeClass('red-lit');
      }, 400);
       }, i * 800);
        } else if (shown[i] === 'blue') {
       setTimeout(function () {
      $('#blue').addClass('blue-lit');
      setTimeout(function () {
      $('#blue').removeClass('blue-lit');
      }, 400);
       }, i * 800)
        } else if (shown[i] === 'green') {
      setTimeout(function () {
      $('#green').addClass('green-lit');
      setTimeout(function () {
      $('#green').removeClass('green-lit');
      }, 400);
       }, i * 800)
        } else if (shown[i] === 'yellow') {
      setTimeout(function () {
      $('#yellow').addClass('yellow-lit');
      setTimeout(function () {
      $('#yellow').removeClass('yellow-lit');
      }, 400);
       }, i * 800);
    }
  }
}

//set event listener on color squares, to listen for user's response.
//when user clicks record response by pushing into clickedColors array
//allow color to blink when clicked so that user gets feedback.
function pushResponse() {
  if (roundNum > 0) return; //keep event listeners from being reset after first round.
  for (let i = 0; i < colorDivs.length; i++) {
    colorDivs[i].addEventListener('click', function() {
      if (colorDivs[i] === redDiv) {
        blinkRed();
        clickedColors.push('red');
        userClicks++;
        checkResponse();
      } else if (colorDivs[i] === blueDiv) {
          blinkBlue();
          clickedColors.push('blue');
          userClicks++;
          checkResponse();
      } else if (colorDivs[i] === greenDiv) {
          blinkGreen();
          clickedColors.push('green');
          userClicks++;
          checkResponse();
      } else if (colorDivs[i] === yellowDiv) {
          blinkYellow();
          clickedColors.push('yellow');
          userClicks++;
          checkResponse();
      }
    });
  }
}

//check shown array against clickedColors array to see if player gets a point or loses.
function checkResponse() {
  let userSuccess;
    for (let i = 0; i < shown.length; i++) {
      if (shown[i] === clickedColors[i]  || clickedColors[i] === undefined) {
        userSuccess = true;
        } else  if (shown[i] !== clickedColors[i] && clickedColors[i] !== undefined) {
         $('#message').html(`Game Over`);
         userSuccess = false;
         shown = [];
    }
  }
  if (userSuccess === true && userClicks === shown.length) {
    roundNum++;
    $('#score').html(`Score:  ${roundNum}`);
    clickedColors = [];
    userClicks = 0;
    play();
  }
}

//add class, set timeout before removing class. net effect is a blink
function blinkRed() {
  setTimeout(function lightUp() {
    $('#red').toggleClass('red-lit');
  }, 200);
  setTimeout(function lightOff() {
    $('#red').toggleClass('red-lit');
  }, 600);
}

function blinkBlue() {
  setTimeout(function lightUp() {
    $('#blue').toggleClass('blue-lit');
  }, 200);
  setTimeout(function lightOff() {
    $('#blue').toggleClass('blue-lit');
  }, 600);
}

function blinkGreen() {
  setTimeout(function lightUp() {
    $('#green').toggleClass('green-lit');
  }, 200);
  setTimeout(function lightOff() {
    $('#green').toggleClass('green-lit');
  }, 600);
}

function blinkYellow() {
  setTimeout(function lightUp() {
    $('#yellow').toggleClass('yellow-lit');
  }, 200);

  setTimeout(function lightOff() {
    $('#yellow').toggleClass('yellow-lit');
  }, 600);
}

