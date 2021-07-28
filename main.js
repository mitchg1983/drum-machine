// Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");

const tock = new Audio("sounds/tock.mp3");

const kick = new Audio("sounds/kick-drum.mp3");

const snare = new Audio("sounds/snare-drum.mp3");

const hi_hat = new Audio("sounds/hi-hat.mp3");

const counter = $("div.measure-counter");

const buttons = $("input");

const fillBar = $("div.fillbar");

const popper = $("div.popper");

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
  setTimeout(startFill, 600);
}



//Updates the beat count at the bottom of the metronome
function updateCounter() {
  const outputText = count + " / " + time;
  $(counter).text(outputText);



  if (count === 1) {
    $(popper).removeClass("rainbow-bg");
    $(fillBar).removeClass("full");
    // $("div.four").text("");
    // $("div.four").removeClass("popOut");
    $("div.one").text(count).addClass("popOut");

    setTimeout(function (){
      $("div.one").text("").removeClass("popOut").addClass("rainbow-bg");
}, 200);


  }

  if (count === 2) {
    // $("div.one").text("");
    // $("div.one").removeClass("popOut");
    $("div.two").text(count).addClass("popOut");


    setTimeout(function (){
          $("div.two").text("").removeClass("popOut").addClass("rainbow-bg");
    }, 200);


  }

  if (count === 3) {
    $("div.three").text(count).addClass("popOut");

    setTimeout(function (){
      $("div.three").text("").removeClass("popOut").addClass("rainbow-bg");
}, 200);
  }

  if (count === 4) {
    // $("div.three").text("");
    // $("div.three").removeClass("popOut");
    $("div.four").text(count).addClass("popOut");
    // $(fillBar).addClass("rainbow-bg")

    setTimeout(function (){
      $("div.four").text("").removeClass("popOut").addClass("rainbow-bg");
      // $(fillBar).removeClass("rainbow-bg");
}, 200);

  }
}

setupUpdate();

function startFill() {
  $(fillBar).addClass("fill");
}

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