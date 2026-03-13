const funFactButton = document.getElementById("fun-fact-btn");
const funFactText = document.getElementById("fun-fact-text");

const funFacts = [
  "I enjoy building web apps that solve real-world problems.",
  "I regularly go to the gym and do weight training several times a week.",
  "I like experimenting with cameras and taking photos while traveling.",
  "I often work on both the front-end and back-end of web projects.",
  "I enjoy learning new tools and technologies to improve my development workflow.",
  "I sometimes turn small ideas into side projects just to see how they work."
];
let factIndex = 0;

if (funFactButton && funFactText) {
  funFactButton.addEventListener("click", () => {
    funFactText.textContent = funFacts[factIndex];
    factIndex = (factIndex + 1) % funFacts.length;
  });
}
