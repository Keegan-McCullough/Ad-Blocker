let blockedCount = 0;
let blockedUrls = [];

// Respond to messages from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getBlockedInfo') {
    sendResponse({
      count: "Unavailable in public extensions",
      urls: []
    });
  }
  return true; // Needed for async response
});