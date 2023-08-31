chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.getSelection().toString()'
  }, function(selection) {
    var text = selection[0];
    chrome.tts.speak(text);
  });
});
