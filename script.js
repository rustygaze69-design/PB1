/* ===== DAILY QUOTES (7) ===== */
const quotes = [
  "Some days are softer than others.",
  "You don’t have to do everything today.",
  "Even quiet days count.",
  "This moment is enough.",
  "You are doing better than you think.",
  "Rest is also progress.",
  "I hope today is gentle on you."
];

/* ===== IMAGES / GIFS (4–6) ===== */
const images = [
  "photos/one.jpg",
  "photos/two.gif",
  "photos/three.jpg",
  "photos/four.gif"
];

/* ===== JOKES (ANSWER = PASSWORD) ===== */
const jokes = [
  { q: "What has keys but can’t open locks?", a: "keyboard" },
  { q: "What runs but never walks?", a: "water" },
  { q: "What has hands but can’t clap?", a: "clock" },
  { q: "What gets wetter as it dries?", a: "towel" },
  { q: "What has a face and two hands?", a: "clock" },
  { q: "What has words but never speaks?", a: "book" },
  { q: "What has a heart but no organs?", a: "artichoke" }
];

/* ===== TAGLINES ===== */
const taglines = [
  "This was just for you.",
  "You unlocked today.",
  "I hoped this would make you smile.",
  "You earned this moment."
];

/* ===== INIT ===== */
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("dailyQuote").innerText = todayQuote;

/* random images */
const shuffled = images.sort(() => 0.5 - Math.random());
document.getElementById("img1").src = shuffled[0];
document.getElementById("img2").src = shuffled[1];

/* joke */
const todayJoke = jokes[Math.floor(Math.random() * jokes.length)];
document.getElementById("dailyJoke").innerText = todayJoke.q;

/* password logic */
function openPassword() {
  document.getElementById("passwordOverlay").classList.add("active");
  document.getElementById("error").innerText = "";
}

function closePassword() {
  document.getElementById("passwordOverlay").classList.remove("active");
}

function checkPassword() {
  const val = document.getElementById("passwordInput").value.toLowerCase();
  if (val === todayJoke.a) {
    closePassword();
    showSurprise();
  } else {
    document.getElementById("error").innerText = "Not quite 🙂";
  }
}

function showSurprise() {
  document.getElementById("surpriseOverlay").classList.add("active");
  document.getElementById("surpriseImg").src = shuffled[2] || shuffled[0];
  document.getElementById("tagline").innerText =
    taglines[Math.floor(Math.random() * taglines.length)];
}

function closeSurprise() {
  document.getElementById("surpriseOverlay").classList.remove("active");
}
