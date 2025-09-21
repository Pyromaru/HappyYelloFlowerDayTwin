document.getElementById("openBtn").addEventListener("click", function() {
  document.querySelector(".intro-screen").classList.add("hidden");
  const bouquet = document.querySelector(".bouquet-container");
  bouquet.classList.remove("hidden");

  // music
  const music = document.getElementById("bg-music");
  music.play();

  // Trigger bloom animations
  document.querySelectorAll(".flower").forEach((flower) => {
    flower.style.animationPlayState = "running";
  });

  // Generate falling petals
  setInterval(() => {
    createPetal();
  }, 500); // كل نص ثانية بتلة جديدة
});

function createPetal() {
  const petal = document.createElement("img");
  petal.src = "1.png"; // صورة بتلة صفراء شفافة
  petal.classList.add("petal");

  // random position & size
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.width = 20 + Math.random() * 30 + "px";

  // random animation duration
  const duration = 5 + Math.random() * 5;
  petal.style.animationDuration = duration + "s";

  // add to screen
  document.body.appendChild(petal);

  // remove after animation
  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}
