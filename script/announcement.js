const messages = [
  "Flat 40% off on selected sarees – limited time only!",
  "Festive collection now live – shop your perfect drape today.",
  "Special discounts on silk and cotton sarees this week.",
  "Luxury sarees at unbeatable prices – don’t miss out!"
];

let index = 0;
const announcement = document.getElementById("announcement");

function changeText() {
  announcement.classList.remove("show");

  setTimeout(() => {
    announcement.textContent = messages[index];
    announcement.classList.add("show");
    index = (index + 1) % messages.length;
  }, 700);
}

// Initial load
changeText();
setInterval(changeText, 6000);
