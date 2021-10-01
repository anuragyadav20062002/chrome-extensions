

//Send Message To Background
chrome.runtime.sendMessage({name: "message"}, (response) => {
  //Wait for Response
  const apiKey = 'Our-apiKey'
  const datestr = new Date().toISOSstring()
  const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+datestr+'&api_key='+apiKey
  //Update Display on Content Script
  document.querySelector('body').innerHTML=response.text;

});
