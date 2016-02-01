module.exports = ["$scope", "$http", "$compile", ($scope, $http, $compile) ->
	$http.get("data/testForm.json").then (form) ->
		testForm = $scope.testForm = form.data
		fields = testForm.fields
		formBar = ""
		for k, v of fields
			str = "<div class='field' #{v.dir} data-snum='#{k}' ></div>"
			formBar+= str
		parentElem = document.getElementById "fields"
		templObj = $compile(formBar)($scope)
		for i in [0...templObj.length]
			parentElem.appendChild templObj[i]
		$scope.submit = (e) ->
			do e.preventDefault
			alert "Форма отправлена"
		
		
]