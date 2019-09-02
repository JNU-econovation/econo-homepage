var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  showImages();
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > 0) {
    slides[slideIndex - 1].style.display = "block";
  }

}

function showImages() {
  var str = '';
  for (var i = 1; i <= 11; i++) {
    str += `<div class="mySlides fade" >
    <div class="numbertext">${i} / 11</div>
    <img src="/images/card${i}.jpg" style="width:100%">
</div>`
  }

  str += `<!-- buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>`

  $('.slideshow-container').html(str);
}