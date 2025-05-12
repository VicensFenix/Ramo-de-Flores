// Se crea una constante que almacena el archivo mp3
const audio = new Audio('sound/luimi.mp4');

// función para reproducir el audio
function reproducirAudio() {
  audio.currentTime = 0;
  audio.play();
}
