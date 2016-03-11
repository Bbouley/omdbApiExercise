$(document).on('ready', function() {

    var movies = [];

    console.log('sanity check');

    $('form').on('submit', function(e) {
        e.preventDefault();
        var $movieTitle = $('#movieTitle').val();
        var $type = $('#resultType').val();
        console.log($type);
        console.log($movieTitle)
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' + $movieTitle + '&type=' + $type,
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
    arr.forEach(function(el, ind) {
        console.log(ind);
        $('#searchResults').append(
            '<div class="col-xs-4 card">' +
            '<h4>' + el.Title + '</h4>' +
            '<img src="' + el.Poster + '" class="col-xs-12">' + '<br>'
            + '</div>'
            )
    })
}
