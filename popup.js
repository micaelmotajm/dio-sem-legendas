"use strict";

const checkbox = document.getElementById("hide");
const status = document.getElementById("status");

function updateStatus(hidden) {
  status.textContent = hidden
    ? "Legendas ocultas nas páginas compatíveis."
    : "Legendas liberadas.";
}

chrome.storage.local.get(
  {
    hideCaptions: true
  },
  (config) => {
    checkbox.checked = config.hideCaptions;
    updateStatus(config.hideCaptions);
  }
);

checkbox.addEventListener("change", async () => {
  const hideCaptions = checkbox.checked;

  await chrome.storage.local.set({
    hideCaptions
  });

  updateStatus(hideCaptions);
});
