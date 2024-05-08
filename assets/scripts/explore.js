// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  // populate voice options
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector("select");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // button that starts the voice
  const talkBtn = document.querySelector('button');
  const inputText = document.querySelector('textarea');
  const smileyFace = document.querySelector('img');
  talkBtn.addEventListener('click', function() {
    if (voiceSelect.selectedOptions[0].getAttribute('value') == 'select') {
      return;
    }
    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // change the smiley face to open when speaking
    utterThis.onstart = function() {
      smileyFace.src = "assets/images/smiling-open.png";
    };

    // change the smiley face to closed when done speaking
    utterThis.onend = function() {
      // Change the face image back to smiling
      smileyFace.src = "assets/images/smiling.png";
    };
    
    synth.speak(utterThis);
  });
}
