document.getElementById('gallery').innerHTML = '<button type="button"><img alt="Kokomo<br>Shiba Inu" class="thumbnail" id=“thumbnail” src="images/image1.png"></button><button type="button"><img alt="George<br>Pug" class="thumbnail" id=“thumbnail” src="images/image2.png"></button><button type="button"><img alt="Finn<br>German Shepherd" class="thumbnail" id=“thumbnail” src="images/image3.png"></button><button type="button"><img alt="S.J.<br>Terrier" class="thumbnail" id=“thumbnail” src="images/image4.png"></button><button type="button"><img alt="Dakota<br>Husky" class="thumbnail" id=“thumbnail” src="images/image5.png"></button><button type="button"><img alt="Raymond<br>Labrador Mix" class="thumbnail" id=“thumbnail” src="images/image6.png"></button><button type="button"><img alt="Maximus<br>Huksy Mix" class="thumbnail" id=“thumbnail” src="images/image7.png"></button><button type="button"><img alt="Samson<br>Beagle" class="thumbnail" id=“thumbnail” src="images/image8.png"></button><button type="button"><img alt="Rosie<br>Golden Retriever" class="thumbnail" id=“thumbnail” src="images/image9.png"></button><button type="button"><img alt="Carlos<br>Corgi" class="thumbnail" id=“thumbnail” src="images/image10.png"></button><button type="button"><img alt="Lucky<br>Shih Tzu Mix" class="thumbnail" id=“thumbnail” src="images/image11.png"></button><button type="button"><img alt="Tony<br>Maltese Shih Tzu Mix" class="thumbnail" id=“thumbnail” src="images/image12.png"></button>';

// Gallery added dynamically
// All images sourced from https://www.pexels.com/ (free stock images)
// Images wrapped in a <button> tag so they can be selected using the Tab key

const $popup = document.getElementById('popup');

const $thumbnail = document.getElementsByClassName('thumbnail');

const $popupImage = document.getElementById('image');

const $caption = document.getElementById('caption');

for (var i = 0; i < $thumbnail.length; i++) { // Loop through each image

    var img = $thumbnail[i];

    img.onclick = function(evt) {
        $popup.style.display = "block"; // Display background in popup
        $popupImage.src = this.src; // Display image in popup
        $caption.innerHTML = this.alt; // Display caption in popup
    }
}

const span = document.getElementsByClassName('close')[0]; 

span.onclick = function() {
  $popup.style.display = "none"; // 'X' to exit out of popup
}

window.onkeyup = function (event) {
    if (event.keyCode == 27) { // ESC Key to exit out of popup
    document.getElementById('popup').style.display = "none";
    }
    if (event.keyCode == 13) { // Enter key to open popup when image is selected, could not find a way to loop through each image
        document.getElementById('popup').style.display = "block";
        }
}