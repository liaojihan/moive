// 即将上映
$(function () {
    $.ajax({
        url: "http://api.douban.com/v2/movie/coming?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=12",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            if (data) {
                setShownSoon(data['entries']);
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
                setTop100(data['subjects']);
            }
        }
    });

});

setShownSoon = data => {
    console.log(data);
    $('.shown-soon .movie-item').each( function (index, element) {

        $(this).find('img').attr('src', data[index].images.small);
        $(this).find('img').on('load', function () {
            $(this).css('width', '100%');
            $(this).css('height', '100%');
        });
        $(this).next().text(dateFormatter(data[index].pubdate));
    });

    $('.shown-soon .movie-item .position').each( function (index) {
        $(this).css('background', linear);
        $(this).find('span').text(data[index].title.length >= 8 ? data[index].title.substring(0, 7) + '...' : data[index].title);
        $(this).next().text();
    });
};

setTop100 = data => {
    let i = 1;
    $('.shown-soon .normal-span').each( function (index) {
        if (i <= 3) {
            $(this).find('.rank-index').addClass('rank-index-top');
        }
        $(this).find('.rank-index').text(i);
        $(this).find('.movie-name').text(data[index].title);
        $(this).find('.movie-box').text(generateScore(data[index].rating.average));
        i++;
    });

    $('.shown-soon .movie-top .movie-list').find('.loading').css('display', 'none');
    $('.shown-soon .movie-top .movie-list').find('.movie-ul').css('display', 'block');
};