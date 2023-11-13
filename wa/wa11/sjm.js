const thumbnailBar = document.getElementById('thumbnail-bar');
const displayedImg = document.getElementById('displayed-img');

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
const altTexts = {
  'pic1.jpg': 'Image 1',
  'pic2.jpg': 'Image 2',
  'pic3.jpg': 'Image 3',
};

// Function to create a thumbnail and add it to the thumbnail bar
function createThumbnail(filename) {
  const thumbnail = document.createElement('img');
  thumbnail.src = filename;
  thumbnail.alt = altTexts[filename];
  thumbnail.classList.add('thumbnail');

  thumbnail.addEventListener('click', function () {
    displayImage(filename);
  });

  thumbnailBar.appendChild(thumbnail);
}

// Function to display a larger image above the thumbnail bar
function displayImage(filename) {
  displayedImg.src = filename;
  displayedImg.alt = altTexts[filename];
}

// Add thumbnails to the thumbnail bar
imageFilenames.forEach((filename) => {
  createThumbnail(filename);
});
