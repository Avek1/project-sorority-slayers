// JavaScript source code

//$(document).ready(function () {
//    console.log("Sorority Slayers!");
//    alert("Sorority Cholas!");
//});

(function () {

    var app = angular.module('slayApp', []);
    app.controller('SlayController', function () {
        // is this where i would hard-code bios, episodes, bts?
        // example below: gems
        // dont' forget to use ng-repeat to display your chingaderas.

    });

    //var gems = [
    //            { name: 'Azurite', price: 2.95 },
    //            { name: 'Bloodstone', price: 5.95 },
    //            { name: 'Zircon', price: 3.95 }
    //    ];

    app.controller('TabController', function () {
        // this chingadery should controller the button tabs
        // refer to lesson 2.8
    });

    app.controller('ImageController', function () {
        // refer to lesson 2.10
    });

})();