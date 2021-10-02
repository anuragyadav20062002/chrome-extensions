chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name == "playTrack") {
    /*......*/

    var trackName = msg.track
    var audio = document.querySelector(".audio-element")
    audio.src = "track-" + trackName + ".mp3"
    audio.play()
  }

  if (msg.name == "pauseTrack") {
    var audio = document.querySelector(".audio-element")
    audio.pause()
  }
})
