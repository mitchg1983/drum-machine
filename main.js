// Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");

const tock = new Audio("sounds/tock.mp3");

let count = 1;
// This function is called every 600ms
function update() {

    if (count <= 3) {
        console.log(count);
    tick.play();
    count++; 
    return

  }

  if (count === 4) {
    console.log(count);
    tock.play();
    count = 1;
    return
  }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
  setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
