const thumbnailContainer = document.getElementById("thumbnail-container");
// const displayImage = document.getElementById("display-img");
let currentIndex = 0;

const audio = new Audio("./audio/forest.mp3");
let isPlaying = false;

const images = [
  {
    src: "./img/img1.jpg",
    alt: "Forest Path",
  },
  {
    src: "./img/img2.jpg",
    alt: "Poppy Hill",
  },
  {
    src: "./img/img3.jpg",
    alt: "Forest",
  },
  {
    src: "./img/img4.jpg",
    alt: "Birds",
  },
  {
    src: "./img/img5.jpg",
    alt: "Birds",
  },
  {
    src: "./img/img6.jpg",
    alt: "Birds",
  },
  {
    src: "./img/img7.jpg",
    alt: "Birds",
  },
  {
    src: "./img/img8.jpg",
    alt: "Birds",
  },
];

for (let i = 0; i < images.length; i++) {

  const img = document.createElement("img");
  
  img.src = images[i].src;
  img.alt = images[i].alt;
  img.title = images[1].title;

  img.setAttribute("tabindex", i + 1);

  thumbnailContainer.appendChild(img);

  img.addEventListener("click", function() {
    console.log("Image was clicked!")
    currentIndex = i;
    updateBackgroundImage();
    });

    function updateBackgroundImage() {
        document.body.style.backgroundImage = `url("${images[currentIndex].src}")`;
    
    if (!isPlaying) {
      audio.play();
     isPlaying = true;
    }
}

document.getElementById("btn-stop").addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false; 
  }
});

}
    document.addEventListener('keydown', function(event) {
      if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackgroundImage();
      } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBackgroundImage();
      }
    });

   

    

  
    






