// 热播电影
$(function () {
    $.ajax({
        url: "http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            if (data['entries']){
                setShowingHot(data['entries']);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });

    $.ajax({
        url: "http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            if (data['subjects']){
                setTop50(data['subjects']);
            }
        }
    });
});

setShowingHot = data => {
    $('.showing-hot .movie-item img').each( function (index, element) {
        $(this).attr('src', data[index].images.small);
        $(this).on('load', function () {
            $(this).css('width', '100%');
            $(this).css('height', '100%');
        });
    });
};

setTop50 = data => {
    let i = 1;
    $('.showing-hot .normal-span').each( function (index) {
        if (i <= 3) {
            $(this).find('.rank-index').addClass('rank-index-top');
        }
        $(this).find('.rank-index').text(i);
        $(this).find('.movie-name').text(data[index].title);
        $(this).find('.movie-box').text(generateScore(data[index].rating.average));
        i++;
    });

    $('.showing-hot .movie-top .movie-list').find('.loading').css('display', 'none');
    $('.showing-hot .movie-top .movie-list').find('.movie-ul').css('display', 'block');
};