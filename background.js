// background.js
console.log("Ad Blocker is running");

chrome.runtime.onInstalled.addListener(() => {
    console.log('Ad Blocker extension installed.');
  });
  