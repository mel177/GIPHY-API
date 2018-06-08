// Initial array of animals
var topics = ['dogs', 'rabbits', 'cows', 'unicorn'];

function renderButtons(){

   $("#picView").empty();  
    for (var i = 0; i < topics.length; i++) {
        $('#picView').append('<button>' + topics[i] + '</button>');
       
    }

 }

 // This function handles events where one button is clicked
 function addNewButton(){
    $('#addGif').on('click', function(){

    // submit button for new topics... aka animals
    var newAnimal = $('#gif-input').val().trim();
    if (newAnimal == ''){
    return false; // no blank buttons
 }
    topics.push(newAnimal);

    renderButtons();
    return false;

 });
}

    

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
    
   


    var gifDiv = $("<div>"); //div for the gifs to go inside
        gifDiv.addClass("gifDiv");
     // pulling gif
     var gifImage = $("<img>");
          gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
          gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
          gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
         gifImage.attr("data-state", "still"); // set the image state
         gifImage.addClass("image");
      gifDiv.append(gifImage);
     // pulling still image of gif
     // adding div of gifs to gifsView div
     $("#picView").prepend(gifDiv);
    })
    });


    //when user clicks on the gif, the pic will pause, animate 
    $(document).on("click", ".animal", renderButtons);
    $(document).on("click", ".image", function(){
        var state = $(this).attr("data-state");
        if(state === "still") {
            $(this).attr("src",$(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });