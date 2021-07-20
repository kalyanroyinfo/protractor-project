(function () {
    'use strict';


    global.commons = {};
    global.commons.inputBoxActions = require('./src/commons/inputBoxActions.js');

    global.utils = {};
    global.utils.objectLocator = require('./src/utils/objectLocator.js');
    
    global.pages = {};
    global.pages.PageFactoryPage = require('./test/pages/PageFactoryPage.js');

}());
