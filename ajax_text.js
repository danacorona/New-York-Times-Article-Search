var query = "";
query = "election";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page&api-key=ORfkiyHtX0fJ1r0ntGTm2lJ4JYmBGCGG"
var richardsKey = "ORfkiyHtX0fJ1r0ntGTm2lJ4JYmBGCGG";
var trevorsKey = "r1ZG0wcI8i8Ebg7xVZGA31ezpG90L2uC";
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})