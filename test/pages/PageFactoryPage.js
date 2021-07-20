module.exports = function () {
    'use strict';
    var objRepo = require('../resources/ObjectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();

    var userName = objLocator.findLocator(objRepo.LoginPage.userName);
    var password = objLocator.findLocator(objRepo.LoginPage.Password);
    var userNameDescription = objLocator.findLocator(objRepo.LoginPage.userNameDescription);
    var login = objLocator.findLocator(objRepo.LoginPage.Login);
    var homePage = objLocator.findLocator(objRepo.HomePage.loginHome);

    this.openHomePage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.enterUserName = function (value) {
        inputBoxActions.type(userName, value);
        return this;
    };
    
    this.enterPassword = function (value) {
        inputBoxActions.type(password, value);
        return this;
    };

    this.enteruserNameDescription = function (value) {
        inputBoxActions.type(userNameDescription, value);
        return this;
    };

    this.performLogin = function () {
        login.click();
        return this;
    };

    this.verifyLogin = function (value) {
        homePage.getText().then(function(searchCountText){
            console.log(searchCountText);
            expect(searchCountText).toEqual('Home');
           });
        return this;
    };

    // this.searchMovie = function () {
    //     submitButton.click();
    //     return this;
    // };

    // this.searchCountVerify = function () {
    //     // buttonActions.click(submitButton);
    //     movieCount.getText().then(function(searchCountText){
    //         console.log(searchCountText);
    //         expect(searchCountText).toEqual('1 Movies');
    //        });
    //     return this;
    // };

    // this.itemListElementAttributeVerification = function () {
    //     itemListElement.click();
    //     browser.sleep(1000);
    //     itemListElementComponentList.getAttribute("class").then(function(value){
    //         console.log(value);
    //         expect(value).toEqual('collapse show');
    //        });
    //     itemListElement.click();
    //     browser.sleep(1000);
    //     itemListElementComponentList.getAttribute("class").then(function(value){
    //         console.log(value);
    //         expect(value).toEqual('collapse');
    //        });
    //     return this;
    // };

    // this.itemListElementValueVerification = function () {
    //     itemListElement.click();
    //     browser.sleep(1000);
    //     element.all(by.xpath("//*[@class='list-group']/li")).getText().then(function(menus) {
    //         expect(menus.length).toBe(4);
    //         console.log(menus);
    //     });
    //     return this;
    // };
};