function generateRandomNumber() {
    var randomNum = Math.floor(Math.random() * 9000000000) + 1000000000;
    document.getElementById('randomNumber').innerText = "Is your number... " + randomNum;
  

  var formattedNum = '(' + randomNum.toString().substring(0, 3) + ')' +
                         randomNum.toString().substring(3, 6) + '-' +
                         randomNum.toString().substring(6);

      document.getElementById('randomNumber').innerText = "Is your number... " + formattedNum;
}
  function generateNewNumber(response) {
    if (response === 'Yes') {
      //moves the "Yes" button to a random position
      moveButton('yes');
    } else if (response === 'No') {
      //if the response is "No," generate a new random number
      generateRandomNumber();
    }
  }
//moving the button around screen 
  function moveButton(buttonId) {
    var button = document.getElementById(buttonId + 'Button');
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
  }