var _ = require('underscore');
var fs = require('fs');
var parseString = require('xml2js').parseString;
var q = require('q');

var AIML = function(data){
    this.data = data;

    this.getRules = function(){
        var rules = [];
        _.each(this.data.aiml.category, function(val,key){
            rules[key] = {
                pattern: val.pattern[0].trim(),
                response: val.template[0].trim()
            };
        });
        return rules;
    };

    return this;
};

module.exports = AIML;