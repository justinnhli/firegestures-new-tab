firegestures-new-tab
====================

A multi-use new tab script for [FireGestures](https://addons.mozilla.org/en-us/firefox/addon/firegestures/), designed for mouse gestures.

In order of evaluation:

1. if the gestures started at a link, open it in a new tab
2. if the selected text is a URL, open it in a new tab
3. if the selected text is an email address, open it as though it's a mailto: protocol
4. if the selected text is neither of these, search for it
5. otherwise, open a default new tab
