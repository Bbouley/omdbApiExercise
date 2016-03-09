$(document).on('ready', function() {

    var movies = [];

    console.log('sanity check');

    $('form').on('submit', function(e) {
        e.preventDefault();
        var $movieTitle = $('#movieTitle').val();
        console.log($movieTitle)
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' + $movieTitle,
            type: 'GET',
            success : function(data) {
                var movies = [];
                data.Search.forEach(function(el){
                    movies.push(el);
                });
                appendResults(movies)
            }
        })
    });

});

// *** helper functions *** //

function appendResults (arr) {
    $('#searchResults').empty()
    arr.forEach(function(el) {
        $('#searchResults').append(
            '<p>' + el.Title + '</p>' +
            '<img src="' + el.Poster + '" class="twelve columns">' + '<br>'
            )
    })
}
