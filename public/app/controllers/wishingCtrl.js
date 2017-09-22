/**
 * Created by abhi on 21-Sep-17.
 */
angular.module('wishController',['wishService'])

.controller('createCtrl',function ($http,$timeout,$location,wishing) {
    var app = this;
    this.regwish = function (regdata) {
        wishing.create(app.regdata).then(function (data) {
            if (data.data.success) {
                app.successmsg = data.data.message + "You can share your post now";
                $timeout(function () {
                    $location.path('/share');
                }, 2000);
            }
            else {
                app.errormsg = data.data.message;
                $timeout(function () {
                    $location.path('/createwish');
                }, 2000);
            }
        }

        )};
});