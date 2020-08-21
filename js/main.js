function getData(){
    $(".inner").empty();
    var input = $('#search').val();
    $.get('http://api.giphy.com/v1/gifs/search?q=') + input + '&api_key=URG7FMX93pwFlDetgwBBhsCyG3X9dEPOpb&limit=30', function (response) {

        for(i = 0; response.data.lenght; i++) {
            $('.inner').append("<img src=" + response.data[i].images.orginal.url + ">")
        }
    })
}