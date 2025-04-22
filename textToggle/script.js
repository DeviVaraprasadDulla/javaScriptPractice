const bbtn = document.querySelector(".bold");
const ibtn = document.querySelector(".italic");
const ubtn = document.querySelector(".underline");
const con = document.querySelector(".content");

// 🔁 Toggle Bold
bbtn.addEventListener('click', () => {
  con.style.fontWeight = con.style.fontWeight === "bold" ? "normal" : "bold";
});

// 🔁 Toggle Italic
ibtn.addEventListener('click', () => {
  con.style.fontStyle = con.style.fontStyle === "italic" ? "normal" : "italic";
});

// 🔁 Toggle Underline
ubtn.addEventListener('click', () => {
  con.style.textDecoration = con.style.textDecoration === "underline" ? "none" : "underline";
});
