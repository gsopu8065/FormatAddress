/**
 * Created by srujangopu on 12/23/15.
 */

var request = require('request-promise');

module.exports.getGeographyDetails = function(address){

        var options = {
                uri: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyARg4Dq9ZsMbGv1K9PYkIsvf-JvNk_xE1Y&address='+address,
                json: true
        };
        return request(options);
};

module.exports.getZipcodeDetails = function(zipCode){
        var options = {
                uri: 'http://api.zippopotam.us/us/42101'

        };
        return request(options);
};

