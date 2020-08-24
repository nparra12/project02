function getData() {
  var inner = $('.inner')
  var input = $("#search").val()
  //request 
  var xhr = $.get('http://api.giphy.com/v1/gifs/search?q=' + input + '+&api_key=URG7FMX93pwFlDetgwBBhsCyG3X9dEPO&limit=30');

  //promise 
  xhr.done(function (response) {
    console.log("success got data", response);
    var jiffs = response.data

    inner.empty()

    for (i in jiffs) {
      inner.append("<img src='"+jiffs[i].images.fixed_width.url+"' style='height:350px; width:350px '/>")

    }
  }
  );



}