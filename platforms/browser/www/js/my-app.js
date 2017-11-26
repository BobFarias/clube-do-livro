// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

var anotherView = myApp.addView('.dicas');


$$(document).on('pageInit', '.page[data-page="dicas-main"]', function (e) {

})

$$(document).on('pageInit', '.page[data-page="dic-1"]', function (e) {

})

(document).on('.page[data-page="dicas-main"]', '.page[data-page="dic-1"]', function (e) {

})


// Now we need to run the code that will be executed only for About page.


