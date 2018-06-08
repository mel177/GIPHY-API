$(document).ready() 

// array of gif topics
var topics = ["dogs", "cows", "unicorns", "cats" ];     
var currentGIf;
var pauseGif;
var animatedGif;
var stillGif;
// display the buttons using function display the HTML to  the appropriate content
function displayButtons(){
    var topics = $(this).attr("data-search");
    
    // Creating an AJAX call for the specific topic button being clicked
    var queryUrl  = `https://api.giphy.com/v1/gifs/search?q=` + topics + `&api_key=djALz2kux6YRp13Gfq1icR5DPV7gnwxe&limit=10`;
    $.ajax({url:queryUrl,method:'GET'})
        .then(function(response){
            
        var showBtn = $('<div class="pushButtons">')
        var imgUrl = response.data.url;
        var image = $('<img>').attr('src', imgUrl);
        showBtn.append(image);
        $('#pushButtons').append(showBtn);
    });   
}
    displayButtons();

//display GIF on click
$('.showBtn').on('click', function(){
    $('.display').empty();
   
});
//function for displaying gif data
function renderButtons() {
//looping through the arrays of gifs
for (var i=0; i < topics.length; i++){
 
    
// The dynamically generating buttons for each movie in the array
// This code $("<button>") is all jQuery needs to create the beggining and end tag (<button></button>
        var a = $("<button>");
 // adding a class of new-btn to our bottom
 a.addClass("addGif");
 //adding a data-attribute
 a.attr("data-search", topics[i]);
 // providing initial button text
 a.text(topics[i]);
 // adding buttons to the buttons-view div   
    $("#addGif").append(a);
}
}
// when user adds a new topic, submit button to add input
$("#addGif").on("click", function(event){
    event.preventDefault();
    var newGif = $("#newGifInput").val().trim();
    topics.push(newGif);
    console.log(topics);
    $("#newGifInput").val('');
   
    displayButtons();
});