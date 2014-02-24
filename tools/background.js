var myIndexURL = "chrome-extension://"+location.host+"/main.html";
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: myIndexURL});
});