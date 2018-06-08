// Initial array of animals
var topics = ['dogs', 'rabbits', 'cows', 'unicorn'];

function renderButtons(){

   $("#picView").empty();  
    for (var i = 0; i < topics.length; i++) {
        $('#picView').append('<button>' + topics[i] + '</button>');
    }

 }

 // ========================================================

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
    
  