// Belkacem Berchiche, 2020

function genericOnClick(info, tab) {
  console.log("Selected text: " + info.selectionText);
  // TODO Post to REST api (Build it using Express.js and Mongoose)
}

// TODO Add parent menu: Darja extensions -> Darja / Not darja 
chrome.contextMenus.create({
  id: "darjaContextMenu",
  title: "This is Darja!",
  contexts: ["selection"],
  onclick: genericOnClick,
});
