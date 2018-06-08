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

     // YOUR CODE GOES HERE
    var topics = $('#gif-input').val();
    $('#picView').append('<button>' + topics + '</button>');
    return false;

 });

 // ========================================================

 // This calls the renderButtons() function
 renderButtons();
    

 //calling API when button clicked

 $('button').on('click',function(){
    var x = $(this).data("search");
   

    var queryUrl  = `https://api.giphy.com/v1/gifs/search?q=`+topics+`&api_key=djALz2kux6YRp13Gfq1icR5DPV7gnwxe&limit=10`;
    console.log(queryUrl);

    $.ajax({url:queryUrl,method:'GET'})
    .done(function(response){
        console.log(response);
        for(var i=0; i<response.data.length;i++){
        $('#picView').prepend("<p>Rating: "+response.data[i].rating+"</p>");
        $('#picView').prepend("<img src='"+response.data[i].images.downsized.url+"'>");

        }
       
    })
})