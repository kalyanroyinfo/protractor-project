describe('Protractor Login Example' + browser.browserName, function () {

    'use strict';

    var testData = require('../resources/TestData.json');
    var pageFactoryPage = new pages.PageFactoryPage();

    it('Open login page and verify Title', function () {
        pageFactoryPage.openHomePage(browser.params.baseUrl);
        console.log(browser.params.baseUrl);
        expect(browser.getCurrentUrl()).toContain(browser.params.baseUrl);
        browser.getTitle().then(function(webpagetitle){
            expect(webpagetitle).toEqual('Protractor practice website - Registration');
           });
    });

    it('Verify Search Button is Working', function () {
        pageFactoryPage.enterUserName(testData.UserDetails.userName);
        pageFactoryPage.enterUserName(testData.UserDetails.password);
        pageFactoryPage.enterUserName(testData.UserDetails.userName);
        pageFactoryPage.performLogin();
        browser.sleep(1000);
        pageFactoryPage.verifyLogin();
        browser.sleep(1000);
    });
});
