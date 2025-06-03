chrome.runtime.onInstalled.addListener(() => {
    console.log("Ad Blocker Extension Installed");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message && message.type === 'getBlockedInfo') {
      sendResponse({
        count: "Unavailable in public extensions",
        urls: []
      });
    }
    return true;
  });
  