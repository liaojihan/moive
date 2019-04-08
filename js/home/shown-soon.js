$(function () {
    $.ajax({
        url: "https://api.douban.com/v2/movie/coming_soon?city=成都&start=0&count=12",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            console.log(data);
            setShownSoon(data['subjects']);
            $('.shown-soon').find('.hot').text(data.title);
        },
        error: function (e) {
            console.log(e);
        }
    });
});

setShownSoon = data => {
    let start = "";
    for (const d of data){
        start += "<dd>" + "<img src='" + d.images.small +"'>" + "</dd>";
    }
    $('.shown-soon').find('.movie_dl').append(start);
};