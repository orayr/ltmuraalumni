

app.controller("CreatStudentsCtrl", function ($scope,$rootScope, $http) {
    var current=localStorage.getItem('currentUser');
    if (current== "undefined"||current==""||current==null){
        window.open("http://localhost:5000/#/login", "_self");
    }
    else {

        var user=JSON.parse(current);

        if(user.Type!=5&&user.Type!=4)
            window.open("http://localhost:5000/#/", "_self");
    }
   //
    $scope.createStudent = function() {



        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        var document =
            {

                "StudentId": $scope.StudentId,
                "FirstName":$scope.FirstName,
                "LastName": $scope.LastName,
                "ClassId":myForm.ClassId.value

            };

        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              $scope.message1 =xmlhttp.responseText;
                $scope.$apply();
                $rootScope.edit=true;
                setTimeout(function() {
                    window.open("http://localhost:5000/#/admin/students","_self");
                }, 1000);

                //alert(xmlhttp.responseText);


            }
        }

        xmlhttp.open('POST', 'http://localhost:5000/createStudent');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xmlhttp.send(JSON.stringify(document));
    }


});