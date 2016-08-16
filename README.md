# Project Overview

In this project I have added [Jasmine](http://jasmine.github.io/) tests according to the specs outlined in the Project info to the jasmine/spec/feedreader.js script.

# To run:
This project is hosted on [gh-pages](https://rbtr.github.io/feedreader-fend).
To run manually, clone the repo and then open `index.html`


## Tests added
* A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* A new test suite named `"The menu"`.
* A test that ensures the menu element is hidden by default. 
* A test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
* A test suite named `"Initial Entries"`.
* A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* A test suite named `"New Feed Selection"`.
* A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.