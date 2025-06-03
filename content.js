chrome.runtime.sendMessage("getBlockedInfo", (response) => {
    document.getElementById("count").textContent = response.blockedCount;
    const list = document.getElementById("urls");
    response.blockedUrls.forEach((url) => {
      const li = document.createElement("li");
      li.textContent = url;
      list.appendChild(li);
    });
  });
  
