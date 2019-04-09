// 即将上映
$(function () {
    $.ajax({
        url: "https://api.douban.com/v2/movie/coming_soon?city=成都&start=0&count=12",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            if (data) {
                setShownSoon(data['subjects']);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
});

setShownSoon = data => {
    $('.shown-soon .movie-item img').each( function (index, element) {
        $(this).css('width', '100%');
        $(this).css('height', '100%');
        $(this).attr('src', data[index].images.small);
    });
};