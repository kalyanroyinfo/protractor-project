module.exports = function () {

    //type a value in input box
    this.type = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.clear();
                    if (typeof value !== 'undefined') {
                        element.sendKeys(value);
                    }
                    return this;
                });
            });
        }
    };
};