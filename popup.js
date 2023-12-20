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
// 12/19/23 interviewed someone who didn't have projects and had an empty github repository
// 12/20/23 a lot of css today using chat gpt, not much javascript stuff. html, flexbox, flex-basis. xsl conditional. found useful xml validation tool for debugging. debugging is awesome