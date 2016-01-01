/**
 * Created by srujangopu on 12/23/15.
 */

var request = require('request-promise');

function FormatAddress(address){

        var options = {
                uri: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyARg4Dq9ZsMbGv1K9PYkIsvf-JvNk_xE1Y&address='+address,
                json: true
        };

        return request(options)
            .then(function(result){
                    return getAll(result, "formatted_address");
            });
};

function getAll( input, target ) {
        var result = [];

        function parseData( input, target ) {

                if(typeof input == 'array') {
                        input.forEach(function (obj) {
                                parseData(obj, target);
                        });
                }
                else if(typeof input == 'object'){

                        var keys = Object.keys(input);
                        keys.forEach(function(key){
                                var valueOFKey = input[key];
                                if(key == target)
                                  result.push(valueOFKey);
                                if(typeof valueOFKey == "object"){
                                        parseData(valueOFKey, target);
                                }
                        });
                }
        }

        if(input)
                parseData( input, target );

        return result;
}
module.exports = FormatAddress;