/**
 * Created by srujangopu on 12/23/15.
 */

var assert = require('chai').assert;
var superagent = require('superagent');
var formatAddress = require("../");

describe('server testing', function() {

    it('should get geography details ', function(done) {

        setTimeout(done, 15000);
        formatAddress("1016 N plum grove rd").then(function(data){
            console.log(data);
            done();
        });

    });
});