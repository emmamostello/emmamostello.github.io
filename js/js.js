function generateRandomNumber() {
    // Generate a random 10-digit number
    var randomNum = Math.floor(Math.random() * 9000000000) + 1000000000;
    
    // Display the number on the page
    document.getElementById('randomNumber').innerText = "Is Your Number...: " + randomNum;
  }

  function generateNewNumber(response) {
    if (response === 'Yes') {
      // Move the "Yes" button to a random position
      moveButton();
    } else if (response === 'No') {
      // If the response is "No," generate a new random number
      generateRandomNumber();
    }
  }
