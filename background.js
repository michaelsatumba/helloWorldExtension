chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.update(tab.id, {url: 'https://chat.openai.com/'});
  });
  