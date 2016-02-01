module.exports = ["$compile", ($compile) ->
	restrict: "A"
	scope: on
	templateUrl: "views/testnumber.html"
	link: (scope, elem, attrs) ->
		field = scope.field = scope.testForm.fields[+attrs.snum]
		inp = elem.find("input")[0]
		if field.required
			inp.setAttribute "required", ""
	]