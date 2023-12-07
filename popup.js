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

// 12/6/23
// 12/7/23 deploying a tag - copy and paste images - control creating email to report - "ssi.frontend" format - security lecture cs50 understanding technology