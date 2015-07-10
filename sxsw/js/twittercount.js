$.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://api.twittercounter.com/?twitter_id=cooltemplates&apikey=oxuu7hIihDGxoLytZ7eaxQ2M9&output=JSONP&callback=getcount",
    success: function (data) {
        var twitterfollowcount = data.followers_current;
        $(".twittercount").html(twitterfollowcount);
    }
});

