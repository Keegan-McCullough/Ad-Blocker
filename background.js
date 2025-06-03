let blockedCount = 0;
let blockedUrls = [];

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  blockedCount++;
  blockedUrls.push(info.request.url);
  console.log(`Blocked: ${info.request.url}`);
});

// Make blocked count available to popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "getBlockedStats") {
    sendResponse({
      count: blockedCount,
      urls: blockedUrls
    });
  }
});
  