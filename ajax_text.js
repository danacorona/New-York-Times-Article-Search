// variable for keyword to search
var query = "new york times";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=ORfkiyHtX0fJ1r0ntGTm2lJ4JYmBGCGG"
var richardsKey = "ORfkiyHtX0fJ1r0ntGTm2lJ4JYmBGCGG";
// var trevorsKey = "r1ZG0wcI8i8Ebg7xVZGA31ezpG90L2uC";

// ajax call function. need to create variables to return keywords search web url and headline etc. Also need to add variable to render number of articles to search.
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.dir(response);
    console.log(response.response.docs[0].headline);
})