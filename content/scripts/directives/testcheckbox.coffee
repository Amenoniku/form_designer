module.exports = ["$compile", ($compile) ->
	restrict: "A"
	scope: on
	templateUrl: "views/testcheckbox.html"
	link: (scope, elem, attrs) ->
		field = scope.field = scope.testForm.fields[+attrs.snum]
		inp = elem.find("input")[0]
		if field.required
			inp.setAttribute "required", ""
		if field.checkAll
			btn = $compile("<label id='allCheck'>Выделить все
								<input type='checkbox' ng-model='selectedAll'>
							</label>")(scope)
			angular.element(elem.children()[1]).append btn
			btn.bind "mousedown", (event) ->
				if !scope.selectedAll
					scope.selectedAll = true
				else
					scope.selectedAll = false
				angular.forEach scope.field.values, (item, i, arr) ->
					field.values[i].Selected = scope.selectedAll]