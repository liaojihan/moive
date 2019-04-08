$(function () {
    $.ajax({
        url: "https://api.douban.com/v2/movie/in_theaters?city=成都&start=0&count=12",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            console.log(data);
            setShowingUp(data['subjects']);
            $('.showing-up').find('.hot').text(data.title);
        },
        error: function (e) {
            console.log(e);
        }
    });
});

setShowingUp = data => {
    let start = "";
    for (const d of data){
        start += "<dd>" + "<img src='" + d.images.small +"'>" + "</dd>";
    }
    $('.showing-up').find('.movie_dl').append(start);
};