define(['app'], function (app) {
    'use strict';
    app.factory('NhMessageFactory', ['$rootScope', function ($rootScope) {
        var sharedService = {};

        sharedService.sharedmessage  = '';

        sharedService.prepForPublish = function(msgobj, mode) {
            this.msgObj  = msgobj;
            this.openingMode  = mode;
        };
        return sharedService;
    }]);
});