module.exports = ["$resource", ($resource) ->
		$resource "views/:viewName", {}, isArray: on
	]