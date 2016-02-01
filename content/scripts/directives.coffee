"use strict"

module.exports = angular.module "directives", []
	.directive "testinput", require "./directives/testInput"
	.directive "testselect", require "./directives/testSelect"
	.directive "testnumber", require "./directives/testNumber"
	.directive "testcheckbox", require "./directives/testCheckbox"