// if the gesture started from a link, open link in new tab
var linkURL = FireGestures.getLinkURL(FireGestures.sourceNode);
if (linkURL) {
	gBrowser.loadOneTab(linkURL, null, null, null, true, false);
	return;
}

// else if there is selected text
var sel = FireGestures.getSelectedText().replace(/^\s+|\s+$/g, '');
if (sel) {
	if (sel.match(new RegExp("^(http(s?)://)?[a-z0-9-]+(\\.[a-z0-9-]+)+"))) {
		// if it is an URL, open link in new tab
		gBrowser.loadOneTab(sel, null, null, null, true, false);
	} else if (sel.match(new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$", "i"))) {
		// if it is an email address, compose in new tab
		gBrowser.loadOneTab("mailto:" + sel, null, null, null, true, false);
	} else if (sel.match(new RegExp("^@[a-z0-9_]+$", "i"))) {
		// if it is a Twitter handle, open the user's Twitter feed
		gBrowser.loadOneTab("https://twitter.com/" + sel + "/", null, null, null, true, false);
	} else {
		// otherwise, search for selection
		BrowserSearch.loadSearch(sel, true);
	}
	return;
}

// else open a new tab
document.getElementById("cmd_newNavigatorTab").doCommand();
