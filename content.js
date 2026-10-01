"use strict";

let hideCaptions = true;

const captionSelectors = [
  ".ytp-caption-window-container",
  ".captions-text",
  ".caption-window",
  ".vjs-text-track-display",
  ".jw-text-track-display"
];

function updateCaptions() {
  captionSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (hideCaptions) {
        element.style.setProperty("display", "none", "important");
      } else {
        element.style.removeProperty("display");
      }
    });
  });
}

chrome.storage.local.get(
  {
    hideCaptions: true
  },
  (config) => {
    hideCaptions = config.hideCaptions;
    updateCaptions();
  }
);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local") return;

  if (changes.hideCaptions) {
    hideCaptions = changes.hideCaptions.newValue;
    updateCaptions();
  }
});

const observer = new MutationObserver(() => {
  updateCaptions();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});
