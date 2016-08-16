/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function () {
            allFeeds.forEach(function (f) {
                expect(f.url).toBeDefined();
                expect(f.url).not.toBe('');
            });
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names', function () {
            allFeeds.forEach(function (f) {
                expect(f.name).toBeDefined();
                expect(f.name).not.toBe('');
            });
        });
    });


    /* A test suite named "The menu" */
    describe('The menu', function () {

        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });


        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggles when clicked', function () {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* A test suite named "Initial Entries" */
    describe('Initial entries', function () {

        /* loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('should contain at least one element', function () {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    /* A new test suite named "New Feed Selection" */

    describe('New feed selection', function () {
        /* loadFeed() is asynchronous
         */
        beforeEach(function (done) {
            loadFeed(0, done);
            this.originalEntries = $('.entry-link');
            loadFeed(1, done);
        });

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('should actually change the content', function () {
            expect($('.entry-link')).not.toBe(this.originalEntries);
        });
    });

}());
