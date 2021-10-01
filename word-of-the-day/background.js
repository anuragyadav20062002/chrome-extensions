//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name == "fetchWords") {
    //Wait for Response
    const apiKey = "Our-apiKey"
    const datestr = new Date().toISOString().slice(0, 10)
    const apiCall =
      "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=" +
      datestr +
      "&api_key=" +
      apiKey

    //Send response
    response({ api: apiCall, date: datestr })
  }
})
