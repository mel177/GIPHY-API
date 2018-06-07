// array of gif topics
var topics = ["dogs", "cows", "unicorns", "cats" ];     
var currentGIf;
var pauseGif;
var animatedGif;
var stillGif;
// display the buttons using function display the HTML to  the appropriate content
function displayButtons(){
    $('#pushButtons').empty();
    for (var i = 0; i < topics; i++){
        var showBtn = $('<btn btn-primary>').text(topics[i]).addClass('showBtn').attr({'data-search': topics[i]});
        $('#pushButtons').append(showBtn);
    }   

//display GIF on click
$('.showBtn').on('click', function(){
    $('.display').empty();
}

var topics = $(this).attr("data-search");
var queryUrl  = `https://api.giphy.com/v1/gifs/search?q=` + topics + `&api_key=djALz2kux6YRp13Gfq1icR5DPV7gnwxe&limit=10`;
    $.ajax({url:queryUrl,method:'GET'})
        .done(function(response){
            currentGIf = giphy.data;
            $.each(currentGif, function(index,value){
                animatedGif= value.images.original.url;
                pauseGif = value.images.original_still.url;
                

            }
        )
// Creating an AJAX call for the specific topic button being clicked


    
    showBtn.attr("id", "show");
    showBtn.attr("data-search", topics[i]);
    showBtn.text(topics[i]);
        $("pushButtons").append(a);
    }


displayButtons();

// submit button to add input

$("#addGif").on("click", function(event){
    event.preventDefault();
    var newGif = $("#newGifInput").val().trim();
    topics.push(newGif);
    console.log(topics);
    $("#newGifInput").val('');
   
    displayButtons();
})

// function to call the giphy

$('button').on('click',function(){
    var x = $(this).data("search");
   

    
    console.log(queryUrl);

    
        console.log(response);
        for(var i=0; i<response.data.length;i++){
        $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+"</p>");
        $('#GIFArea').prepend("<img src='"+response.data[i].images.downsized.url+"'>");

        }
       
    })
})

