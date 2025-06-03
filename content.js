// Remove elements commonly used for ads
const adSelectors = ['iframe[src*="ads"]', '[id^="ad-"]', '.ad', '.adsbygoogle'];
console.log("Ad Blocker script is running.");

window.addEventListener('load', () => {
  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
});
