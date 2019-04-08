
$(function () {
    $.ajax({
        url: "http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            console.log(data);
            // setShowingHot(data['subjects']);
            // $('.showing-hot').find('.hot').text(data.title);
        },
        error: function (e) {
            console.log(e);
        }
    });
});

setShowingHot = data => {
    let start = "";
    for (const d of data){
        start += "<dd>" + "<img src='" + d.images.small +"'>" + "</dd>";
    }
    $('.showing-hot').find('.movie_dl').append(start);
};