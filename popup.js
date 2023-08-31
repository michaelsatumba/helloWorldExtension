document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('readText').addEventListener('click', function() {
    chrome.tabs.executeScript({
      code: 'document.getSelection().toString()'
    }, function(selection) {
      var text = selection[0];
      chrome.tts.speak(text);
    });
  });
});
