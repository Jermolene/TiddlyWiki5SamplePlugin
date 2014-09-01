/*\
title: $:/plugins/tiddlywiki/sample-plugin/samplemacro.js
type: application/javascript
module-type: macro

This is a sample macro that reverses the order of the characters in its argument

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "reverse";

exports.params = [
	{name: "string"}
];

/*
Run the macro
*/
exports.run = function(string) {
    return string.split("").reverse().join("");
};

})();
