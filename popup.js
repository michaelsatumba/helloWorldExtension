document.getElementById('openTab').addEventListener('click', function() {
    chrome.tabs.create({url: 'https://chat.openai.com/'});
  });
  
  // hi 