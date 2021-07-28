let count = 1;

let time = 4;

let currentSound = "Metronome";

const counter = $("div.measure-counter");

const fillBar = $("div.fillbar");

const popper = $("div.P");

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

  $(popper).text("");

  if (count === 1) {
    $("div.four").text("");
    $("div.four").removeClass("popOut");
    $("div.one").text(outputText).addClass("popOut");
  }

  if (count === 2) {
    $("div.one").text("");
    $("div.one").removeClass("popOut");
    $("div.two").text(outputText).addClass("popOut");
  }

  if (count === 3) {
    $("div.two").text("");
    $("div.two").removeClass("popOut");
    $("div.three").text(outputText).addClass("popOut");
  }

  if (count === 4) {
    $("div.three").text("");
    $("div.three").removeClass("popOut");
    $("div.four").text(outputText).addClass("popOut");
  }
}

setupUpdate();

function startFill() {
  $(fillBar).addClass("fill");
}
