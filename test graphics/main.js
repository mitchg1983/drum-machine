// const test = $(".test");

// $(test).addClass("color");

// console.log($(test).text());

// $(test).text("this is a change");

let count = 1;

let time = 4;

let currentSound = "Metronome";

const counter = $("div.measure-counter");

const fillBar = $("div.fillbar");


function update() {


  if (currentSound === "Metronome") {
    if (count <= 3) {
      updateCounter();
      count++;
      return;
    }

    if (count === 4) {
      updateCounter();
      count = 1;
      return;
    }
  }
}

function setupUpdate() {
  setInterval(update, 600);
  setTimeout(startFill, 600);
}

function updateCounter() {
  const outputText = count + " / " + time;
  $(counter).text(outputText);
}

setupUpdate();

function startFill () {
$(fillBar).addClass("fill");
}
