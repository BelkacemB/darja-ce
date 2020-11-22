// Belkacem Berchiche, 2020

function genericOnClick(info, tab) {
  // Post to REST API
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

chrome.contextMenus.create({
  id: "darjaContextMenu",
  title: "This is Darja!",
  contexts: ["selection"],
  onclick: genericOnClick,
});
