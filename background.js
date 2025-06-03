let blockedCount = 0;
let blockedUrls = [];

/* Listen for when a rule is matched (ad blocked)
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  blockedCount++;
  blockedUrls.push(info.request.url);
  console.log(`Blocked: ${info.request.url}`);
});*/

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