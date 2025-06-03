chrome.runtime.onInstalled.addListener(() => {
    console.log("Ad Blocker Extension Installed");
});
console.log("Background script loaded");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "getBlockedInfo") {
        sendResponse({
            count: 2,
            urls: ["https://doubleclick.net", "https://ads.google.com"]
        });
    }
    return true; // Keeps the message channel open for asynchronous responses
});