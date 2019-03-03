document.addEventListener('DOMContentLoaded', function(){
		document.getElementById("testBut").addEventListener("click", function(){
  			alert("That fucking works");
		});
	}, false);

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {

	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
		file: 'inject.js'
	});
});