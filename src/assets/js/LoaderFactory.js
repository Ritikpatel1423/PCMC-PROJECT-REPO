/**
* Created by rohan on 8/22/2016.
*/
define(['angularAMD'], function (angularAMD) {
    'use strict';
    angularAMD.factory('HttpInterceptor', ['$rootScope', '$q', function ($rootScope, $q) {
        var numLoadings = 0;

        return {
            request: function (config) {

                numLoadings++;

                // Show loader
                //console.log("Show loader called")
                var authToken = sessionStorage.getItem("authtoken");
                var userData = sessionStorage.getItem("userData");
                if(authToken) {
                    config.headers['authorization'] = authToken;
                }
                if(userData) {
                    userData = JSON.parse(userData);
                    config.headers['userid'] = userData._id;
                }
                $rootScope.$broadcast("loader_show");
                return config || $q.when(config)

            },
            response: function (response) {

                if ((--numLoadings) === 0) {
                    // Hide loader
                    //console.log("Hide loader called in response")
                    $rootScope.$broadcast("loader_hide");
                }

                return response || $q.when(response);

            },
            responseError: function (response) {

                if (!(--numLoadings)) {
                    // Hide loader
                    //console.log("Hide loader called in error")
                    $rootScope.$broadcast("loader_hide");
                }

                return $q.reject(response);
            }
        };
    }])

});
