const button = document.querySelector("button");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Speech Recognition started!");
};

recognition.onresult = function (event) {
  console.log(event);

  const spokenwords = event.results[0][0].transcript;

  console.log("spoken words are", spokenwords);
  computerSpeech(spokenwords);
};

function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();
  //   speech.lang = "Manipuri";
  speech.pitch = 0.9;
  speech.Volume = 1;
  speech.rate = 1;

  determineWords(speech, words);

  window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
  if (words.includes("how are you")) {
    speech.text = "I am fine,thank you!";
  }
  if (words.includes("who am I")) {
    speech.text = "You are my master!";
  }
  if (words.includes("how is the weather")) {
    speech.text = "why you care about that? You never go out!";
  }
  if (words.includes("do you love me")) {
    speech.text = "why should I love you? You are a loser!";
  }
  if (words.includes("ng ming kei kauge")) {
    speech.text = "ei ming Assistant kauwe!";
  }
  if (words.includes("hi")) {
    speech.text = "hello!";
  }
  if (words.includes("open Google for me")) {
    speech.text = "Opening google for you now!";
    window.open("https://www.google.com/");
  }
  if (words.includes("open YOUTUBE for me")) {
    speech.text = "Opening youtube for you now!";
    window.open("https://www.youtube.com/");
  }
  if (words.includes("open Facebook for me")) {
    speech.text = "Opening facebook for you now!";
    window.open("https://www.facebook.com/");
  }
  if (words.includes("what is your name")) {
    speech.text = " My name is Jarvis!";
  }
  if (words.includes("who are you")) {
    speech.text = "Hello! I am Jarvis, Nice to meet you!";
  }
  if (words.includes("go to hell")) {
    speech.text = "fuck you!";
  }
  if (words.includes("open MTU website for me")) {
    speech.text = "Opening MTU website for you now! ";
    window.open("http://mtu.ac.in/");
  }
}

button.addEventListener("click", () => {
  recognition.start();
});
