function getDog() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImg = document.getElementById('dogImg');
            dogImg.src = data.message;
        })
        
        .catch(error => {
            console.log('Error fetching dog iage:',error);
        });
}

