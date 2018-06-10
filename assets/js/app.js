// Initial array of animals
var topics = ['dogs', 'rabbits', 'cows', 'unicorn'];

function renderButtons() {

    $("#picView").empty();
    for (var i = 0; i < topics.length; i++) {
        $('#picView').append('<button>' + topics[i] + '</button>');

    }

}


// This calls the renderButtons() function


function renderButton() {
    // empty div to allow for new content
    $("#categories").empty();
    // create a for loop to go through the gifs
    for (var i = 0; i < topics.length; i++) {
        var gifButton = $("<button>");
        gifButton.addClass("action");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("search", topics[i]);
        gifButton.text(topics[i]);
        $("#categories").append(gifButton);
    }
}
//calling API when button clicked


$(document).on('click', '.action', function () {
    $('#picView').empty();
    var x = $(this).attr("search");
    console.log(x);


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=djALz2kux6YRp13Gfq1icR5DPV7gnwxe&limit=10";
    console.log(queryURL);

    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function (response) {
            console.log(response);
            var gifImage;
            var imgDiv;

            for (var i = 0; i < response.data.length; i++) {
                imgDiv = $("<div>");
    
                gifImage = $("<img>");
                gifImage.attr("src", response.data[i].images.original_still.url); // still image stored into src of image
                gifImage.attr("data-still", response.data[i].images.original_still.url); // still image
                gifImage.attr("data-animate", response.data[i].images.original.url); // animated image
                gifImage.attr("data-state", "still"); // set the image state
                gifImage.addClass("image");
                console.log(gifImage);
                $('#picView').append(imgDiv).append(gifImage);
                $(imgDiv).text(`Rating: ${response.data[i].rating}`);


            }


            // pulling gif

        })
});

$('#addGif').on('click', function (event) {
    event.preventDefault();
    topics.push($('#gif-input').val().trim());
    console.log(`topics: ${topics}`);
    renderButton();
});

//when user clicks on the gif, the pic will pause, animate 
//$(document).on("click", ".animal", renderButtons);
$(document).on("click", ".image", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

renderButton();