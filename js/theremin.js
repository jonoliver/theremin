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
