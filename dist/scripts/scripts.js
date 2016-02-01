(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var angular, kanjiApp;

angular = require("angular");

require("ngRoute");

kanjiApp = angular.module("testQuest", ["ngRoute", require("./directives").name, require("./controllers").name, require("./services").name]);


},{"./controllers":2,"./directives":4,"./services":9,"angular":"angular","ngRoute":"ngRoute"}],2:[function(require,module,exports){
"use strict";
module.exports = angular.module("controllers", []).controller("TestForm", require("./controllers/testForm"));


},{"./controllers/testForm":3}],3:[function(require,module,exports){
module.exports = [
  "$scope", "$http", "$compile", function($scope, $http, $compile) {
    return $http.get("data/testForm.json").then(function(form) {
      var fields, formBar, i, j, k, parentElem, ref, str, templObj, testForm, v;
      testForm = $scope.testForm = form.data;
      fields = testForm.fields;
      formBar = "";
      for (k in fields) {
        v = fields[k];
        str = "<div class='field' " + v.dir + " data-snum='" + k + "' ></div>";
        formBar += str;
      }
      parentElem = document.getElementById("fields");
      templObj = $compile(formBar)($scope);
      for (i = j = 0, ref = templObj.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        parentElem.appendChild(templObj[i]);
      }
      return $scope.submit = function(e) {
        e.preventDefault();
        return alert("Форма отправлена");
      };
    });
  }
];


},{}],4:[function(require,module,exports){
"use strict";
module.exports = angular.module("directives", []).directive("testinput", require("./directives/testInput")).directive("testselect", require("./directives/testSelect")).directive("testnumber", require("./directives/testNumber")).directive("testcheckbox", require("./directives/testCheckbox"));


},{"./directives/testCheckbox":5,"./directives/testInput":6,"./directives/testNumber":7,"./directives/testSelect":8}],5:[function(require,module,exports){
module.exports = [
  "$compile", function($compile) {
    return {
      restrict: "A",
      scope: true,
      templateUrl: "views/testcheckbox.html",
      link: function(scope, elem, attrs) {
        var btn, field, inp;
        field = scope.field = scope.testForm.fields[+attrs.snum];
        inp = elem.find("input")[0];
        if (field.required) {
          inp.setAttribute("required", "");
        }
        if (field.checkAll) {
          btn = $compile("<label id='allCheck'>Выделить все <input type='checkbox' ng-model='selectedAll'> </label>")(scope);
          angular.element(elem.children()[1]).append(btn);
          return btn.bind("mousedown", function(event) {
            if (!scope.selectedAll) {
              scope.selectedAll = true;
            } else {
              scope.selectedAll = false;
            }
            return angular.forEach(scope.field.values, function(item, i, arr) {
              return field.values[i].Selected = scope.selectedAll;
            });
          });
        }
      }
    };
  }
];


},{}],6:[function(require,module,exports){
module.exports = [
  "$compile", function($compile) {
    return {
      restrict: "A",
      scope: true,
      templateUrl: "views/testinput.html",
      link: function(scope, elem, attrs) {
        var btn, field, inp;
        field = scope.field = scope.testForm.fields[+attrs.snum];
        inp = elem.find("input")[0];
        if (field.required) {
          inp.setAttribute("required", "");
        }
        if (field.addField) {
          btn = $compile("<input type='button' value='&#8853; Добаить еще'>")(scope);
          elem.append(btn);
          inp = elem.find("div")[1];
          return btn.bind("click", function() {
            var extraInp;
            extraInp = angular.element(angular.copy(inp));
            btn = $compile("<span>✖</span>")(scope);
            angular.element(inp).after(extraInp);
            extraInp.append(btn);
            return btn.bind("click", function(e) {
              return e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            });
          });
        } else {
          return elem.addClass("simple");
        }
      }
    };
  }
];


},{}],7:[function(require,module,exports){
module.exports = [
  "$compile", function($compile) {
    return {
      restrict: "A",
      scope: true,
      templateUrl: "views/testnumber.html",
      link: function(scope, elem, attrs) {
        var field, inp;
        field = scope.field = scope.testForm.fields[+attrs.snum];
        inp = elem.find("input")[0];
        if (field.required) {
          return inp.setAttribute("required", "");
        }
      }
    };
  }
];


},{}],8:[function(require,module,exports){
module.exports = [
  "$compile", function($compile) {
    return {
      restrict: "A",
      scope: true,
      templateUrl: "views/testselect.html",
      link: function(scope, elem, attrs) {
        var field, inp;
        field = scope.field = scope.testForm.fields[+attrs.snum];
        inp = elem.find("input")[0];
        if (field.required) {
          return inp.setAttribute("required", "");
        }
      }
    };
  }
];


},{}],9:[function(require,module,exports){
"use strict";
require("ngResource");

module.exports = angular.module("services", ["ngResource"]).factory("GetForm", require("./services/getForm")).factory("GetTemplates", require("./services/getTemplates"));


},{"./services/getForm":10,"./services/getTemplates":11,"ngResource":"ngResource"}],10:[function(require,module,exports){
module.exports = [
  "$resource", function($resource) {
    return $resource("data/testForm.json", {});
  }
];


},{}],11:[function(require,module,exports){
module.exports = [
  "$resource", function($resource) {
    return $resource("views/:viewName", {}, {
      isArray: true
    });
  }
];


},{}]},{},[1]);
