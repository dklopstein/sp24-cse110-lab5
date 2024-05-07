// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // element querues
  var hornSelect = document.getElementById('horn-select');
  var audioElement = document.querySelector('.hidden');
  var volumeLevel = document.getElementById('volume');
  var volumeImage = document.querySelector('#volume-controls img')
  var playBtn = document.querySelector('button');

  // initialize confetti class
  const canvas = document.getElementById('main');
  var jsConfetti = new JSConfetti({ canvas });

  // horn selection event listener
  hornSelect.addEventListener('change', function() {
    // get value of selected horn
    const selectedHorn = hornSelect.value;

    // set image based on selected horn
    document.querySelector('img').src = `assets/images/${selectedHorn}.svg`;
    document.querySelector('img').alt = `${selectedHorn}`;
    
    // set audio based on selected horn
    audioElement.src = `./assets/audio/${selectedHorn}.mp3`;
  });

  // volume slider event listener
  volumeLevel.addEventListener('input', function() {
    audioElement.volume = (volumeLevel.value / volumeLevel.max);
    if (volumeLevel.value == 0 ) {
      volumeImage.src = `assets/icons/volume-level-0.svg`;
      volumeImage.alt = 'Volume level 0';
    } else if (volumeLevel.value < 33) {
      volumeImage.src = `assets/icons/volume-level-1.svg`;
      volumeImage.alt = 'Volume level 1';
    } else if (volumeLevel.value < 67) {
      volumeImage.src = `assets/icons/volume-level-2.svg`;
      volumeImage.alt = 'Volume level 2';
    } else {
      volumeImage.src = `assets/icons/volume-level-3.svg`;
      volumeImage.alt = 'Volume level 3';
    }
  });

  // play button event listener
  playBtn.addEventListener('click', function() {
    // play the audio
    audioElement.play();

    // trigger confetti effect if party horn is selected
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    };
  });
}