(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope,
                       $filter,
                       $injector) {
  $scope.lunchItems = "";
  $scope.sayMessage = "";

  $scope.checkCount = function () {
    var words = $scope.lunchItems.split(",");

    if (words.length == 0 || $scope.lunchItems == "")
     $scope.sayMessage = "Please enter lunch items first";
    else if (words.length <= 3)
     $scope.sayMessage = "Enjoy!";
    else
     $scope.sayMessage = "Too much!";
  };

}

})();
