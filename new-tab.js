// if the gesture started from a link, open link in new tab
var linkURL = FireGestures.getLinkURL(FireGestures.sourceNode);
if (linkURL) {
	gBrowser.loadOneTab(linkURL, null, null, null, true, false);
	return;
}

// else if there is selected text
var sel = FireGestures.getSelectedText().replace(/^\s+|\s+$/g, '');
if (sel) {
	// if it is an URL, open link in new tab
	// else if it is an email, compose in new tab
	// else, search for selection
	if (sel.match(new RegExp("^(http(s?)://)?[a-z0-9]+(\\.[a-z0-9]+)+(/|$)"))) {
		gBrowser.loadOneTab(sel, null, null, null, true, false);
	} else if (sel.match(new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$", "i"))) {
		gBrowser.loadOneTab("mailto:" + sel, null, null, null, true, false);
	} else {
		BrowserSearch.loadSearch(sel, true);
	}
	return;
}

// else open a new tab
document.getElementById("cmd_newNavigatorTab").doCommand();
