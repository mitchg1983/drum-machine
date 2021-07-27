// Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");

const tock = new Audio("sounds/tock.mp3");

const kick = new Audio("sounds/kick-drum.mp3");

const snare = new Audio("sounds/snare-drum.mp3");

const hi_hat = new Audio("sounds/hi-hat.mp3");

const counter = $("div.measure-counter");

const buttons = $("input");

//trackers for time signature
let count = 1;

let time = 4;

//tracker for the user input
let currentSound = "Metronome";

// This function is called every 600ms
function update() {
  //metronome
  if ((currentSound === "Metronome")) {
    if (count <= 3) {
      tick.load();
      tick.play();
      updateCounter();
      count++;
      return;
    }

    if (count === 4) {
      tock.play();
      updateCounter();
      count = 1;
      return;
    }
  }

  //kick-drum
  if ((currentSound === "Kick Drum")) {
    if (count <= 3) {
      kick.load();
      kick.play();
      updateCounter();
      count++;
      return;
    }

    if (count === 4) {
      tock.play();
      updateCounter();
      count = 1;
      return;
    }
  }

  //snare-drum
  if ((currentSound === "Snare Drum")) {
    if (count <= 3) {
      snare.load();
      snare.play();
      updateCounter();
      count++;
      return;
    }

    if (count === 4) {
      tock.play();
      updateCounter();
      count = 1;
      return;
    }
  }

  //hi-hat
  if ((currentSound === "Hi Hat")) {
    if (count <= 3) {
      hi_hat.load();
      hi_hat.play();
      updateCounter();
      count++;
      return;
    }

    if (count === 4) {
      tock.play();
      updateCounter();
      count = 1;
      return;
    }
  }
}

//This function sets up update() to be called every 600ms
function setupUpdate() {
  setInterval(update, 600);
}

//Updates the beat count at the bottom of the metronome
function updateCounter() {
  const outputText = count + " / " + time;
  $(counter).text(outputText);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



$(buttons).each(function (i) {

  console.log(buttons[i])

  const button = buttons[i];

  $(button).on("click", function () {

    $(buttons).each(function (){
      $(this).removeClass("selected")
    });

    $(this).addClass("selected");

    console.log("The currentSound before changing the value is", currentSound);
    currentSound = this.value;

    console.log("The currentSound AFTER changing the value is", currentSound);
  })


})