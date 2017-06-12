// JavaScript source code
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "home.html",
                controller: "HomeCtrl"
            })
         .when('/gallery',
            {
                templateUrl: "gallery.html",
                controller: "GalleryCtrl"
            })
        
////////////////////////////////admin side
        .when('/admin',
            {
                templateUrl: "admin.html",
                controller: "AdminCtrl"
            })
        .when('/admin/staff',
            {
                templateUrl: "adminStaff.html",
                controller: "AdminStaffCtrl"
            })
        .when('/admin/staff/creatStaff',
            {
                templateUrl: "creatStaff.html",
                controller: "AdminStaffCtrl"
            })
        .when('/changePassword',
            {
                templateUrl: "changePassword.html",
                controller: "loginCtrl"
            })
        .when('/admin/staff/updateStaff/:UserId',
            {
                templateUrl: "updateStaff.html",
                controller: "updateStaffCtrl"
            })
        .when('/login',
            {
                templateUrl: "login.html",
                controller: "loginCtrl"
            })
});
