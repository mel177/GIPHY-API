// array of gif topics
var topics = [];

// display the buttons

function displayButtons(){
    $("#pushButtons").empty();
    for (var i=0; i < topics.length; i++){
        var a = $('<btn btn-primary>');
        a.attr("id", "show");
        a.attr("data-search", topics[i]);
        a.text(topics[i]);
        $("pushButtons").append(a);
    }
}

displayButtons();

// submit button to add input

$("#addGif").on("click", function(event){
    event.preventDefault();
    var newGif = $("#newGifInput").val().trim();
    topics.push(newGif);
    console.log(topics);
    $("#newGifInput").val('');
   

})
// function to call the giphy

$('button').on('click',function(){
    var x = $(this).data("search");
   

    var queryUrl  = `https://api.giphy.com/v1/gifs/search?q=`+x+`&api_key=djALz2kux6YRp13Gfq1icR5DPV7gnwxe&limit=10`;
    console.log(queryUrl);

    $.ajax({url:queryUrl,
        method:'GET'})
    .done(function(response){
        console.log(response);
        for(var i=0; i<response.data.length;i++){
        $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+"</p>");
        $('#GIFArea').prepend("<img src='"+response.data[i].images.downsized.url+"'>");

        }
       
    })
})




