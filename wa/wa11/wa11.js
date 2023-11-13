const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    "images/jellypic1.jpeg",
    "images/jellypic2.jpeg",
    "images/jellypic3.jpeg",
    "images/jellypic4.jpeg",
    "images/jellypic5.jpeg"]

const altText = {
   "image1" : "colorful jelly",
   "image2" : "white and brown jelly",
   "image3" : "blue glowing in the dark jelly",
   "image4" : "yellow and orange jelly",
   "image5" : "light blue and purple jelly with white spots"
}


/* Declaring the alternative text for each image file */

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);
    function displayImage () {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image' +(i+1)])
 
 
 }
    newImage.addEventListener("click", displayImage);
 }
 

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    });

