module.exports = ["$compile", ($compile) ->
	restrict: "A"
	scope: on
	templateUrl: "views/testinput.html"
	link: (scope, elem, attrs) ->
		field = scope.field = scope.testForm.fields[+attrs.snum]
		inp = elem.find("input")[0]
		if field.required
			inp.setAttribute "required", ""
		if field.addField
			btn = $compile("<input type='button' value='&#8853; Добаить еще'>")(scope)
			elem.append btn
			inp = elem.find("div")[1]
			btn.bind "click", ->
				extraInp = angular.element angular.copy inp
				btn = $compile("<span>✖</span>")(scope)
				angular.element(inp).after extraInp
				extraInp.append btn
				btn.bind "click", (e) ->
					e.target.parentNode.parentNode.removeChild e.target.parentNode
		else
			elem.addClass "simple"
	]