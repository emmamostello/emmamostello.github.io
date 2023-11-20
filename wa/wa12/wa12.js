function getDog() {
    const loadingContainer = document.getElementById('loadingContainer');
    const loadingBar = document.getElementById('loadingBar');
    const dogImg = document.getElementById('dogImg');
    const tweetButton = document.getElementById('tweet');
  
   
    loadingContainer.style.display = 'block';
  
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        loadingContainer.style.display = 'none';
        dogImg.src = data.message;
        tweetButton.disabled = false;
      })
      .catch(error => {
        console.log('Error fetching dog image:', error);
        loadingContainer.style.display = 'none';
      });
  }
  
  function tweetDog() {
    const dogImg = document.getElementById('dogImg').src;
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20cute%20dog!&url=${encodeURIComponent(dogImg)}`;
    window.open(twitterIntentUrl, '_blank');
  }