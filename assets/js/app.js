// Initial array of animals
var topics = ['dogs', 'rabbits', 'cows', 'unicorn'];

function renderButtons(){

   $("#picView").empty();  
    for (var i = 0; i < topics.length; i++) {
        $('#picView').append('<button>' + topics[i] + '</button>');
       
    }

 }

 // This function handles events where one button is clicked
 $('#addGif').on('click', function(){

    
    var topics = $('#gif-input').val();
    $('#picView').append('<button>' + topics + '</button>');
    return false;

 });

 // ========================================================

 // This calls the renderButtons() function
 renderButtons();
    

 // empty div to allow for new content
 $("#picView").empty(); 
 // create a for loop to go through the gifs
 for (var i = 0; i < topics.length; i++){
     var gifButton = $("<button>");
     gifButton.addClass("action");
     gifButton.addClass("btn btn-primary")
     gifButton.attr("search", topics[i]);
     gifButton.text(topics[i]);
     $("#picView").append(gifButton);
 }

 //calling API when button clicked

 
    $('button').on('click', function(){
    var x = $(this).attr("search");
        console.log(x);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=djALz2kux6YRp13Gfq1icR5DPV7gnwxe&limit=10";
    console.log(queryURL); 

    $.ajax({url:queryURL,method:'GET'})
    .done(function(response){
        console.log(response);
        for(var i=0; i<response.data.length;i++){
            $('#picView').prepend("<p>Rating: "+response.data[i].rating+"</p>");
            $('#picView').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
        }
    })
    });

    //var results = response.data; //shows results of gifs
    
    $(".picView").on("click", function() {
        var state = $(this).attr("data-state");
        if(state === "still") {
            $(this).attr("img scr",$(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("img scr", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });