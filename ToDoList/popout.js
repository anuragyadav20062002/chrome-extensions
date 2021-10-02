const butplay = document.querySelector("button.play")
const butpause = document.querySelector("button.pause")

function clickhandler() {
  const SelectedTrack = document.querySelector("select").value
  chrome.runtime.sendMessage({ name: "playTrack", track: SelectedTrack })
}

function stopplay() {
  chrome.runtime.sendMessage({ name: "pauseTrack" })
}

butplay.addEventListener("click", clickhandler)
butpause.addEventListener("click", stopplay)
