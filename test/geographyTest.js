/**
 * Created by srujangopu on 12/23/15.
 */

var assert = require('chai').assert;
var superagent = require('superagent');
var geography = require("../");

describe('server testing', function() {

    it('should get geography details ', function() {

       geography.getGeographyDetails("7221 hwy 70 S")
           .then(function (res) {
               console.log(res);
           });
    });
});