/**
 * Created by abhi on 21-Sep-17.
 */
angular.module('wishService',[])

    .factory('wishing',function ($http) {
        wishfactory = {};

        //player.create(regdata)
        wishfactory.create = function (regdata) {
            return $http.post('/api/wisher', regdata);
        };
        return wishfactory;
    });