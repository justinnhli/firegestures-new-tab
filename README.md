firegestures-new-tab
====================

A multi-use new tab script for [FireGestures](https://addons.mozilla.org/en-us/firefox/addon/firegestures/), designed for mouse gestures.

In order of evaluation:

1. if the gestures started at a link, open it in a new tab
2. if the selected text is a URL, open it in a new tab
3. if the selected text is an email address, open it with `mailto:` in a new tab
4. if the selected text is a @ handle, go to the user's Twitter in a new tab
5. if the selected text is neither of these, Google it in a new tab
6. otherwise, open a default new tab
