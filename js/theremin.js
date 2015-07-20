// create audio context
// Webkit/blink browsers need prefix, Safari won't work without window.
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.type = 'sine';
oscillator.frequency.value = 220;
oscillator.start();

document.onmousemove = updateTone;

function updateTone(e) {
  posX = e.pageX;
  posY = e.pageY;
  
  oscillator.frequency.value = posX
  gainNode.gain.value = posY  
}

var vibratoRate = 50;
var vibratoInterval = setInterval(vibrato, vibratoRate);

var detuneVal = 10;
var detuneMultiplier = 10

function vibrato() {
  detuneMultiplier = detuneMultiplier * -1;
  oscillator.detune.value = detuneVal * detuneMultiplier;
}

document.onkeydown = handleKey;

function handleKey(e) {
  switch(e.keyIdentifier){
    case "Down":
      if (detuneVal > 0) detuneVal--;
      console.log(detuneVal);
      break;
    case "Up":
      detuneVal++;
      console.log(detuneVal);
      break;
  }
}