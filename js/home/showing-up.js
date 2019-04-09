// 正在热映
$(function () {
    $.ajax({
        url: "https://api.douban.com/v2/movie/in_theaters?start=0&count=12",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            if (data['subjects']){
                setShowingUp(data['subjects']);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });

    $.ajax({
        url: "http://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a",
        dataType: 'jsonp',
        type: 'get',
        success: function (data) {
            if (data['subjects']) {
                setShowingUpTop(data['subjects']);
            }
        }
    });
});

setShowingUp = data => {
    $('.showing-up .movie-item img').each( function (index, element) {
        $(this).attr('src', data[index].images.small);
        $(this).css('width', '100%');
        $(this).css('height', '100%');
    });

    $('.showing-up .movie-item .position').each( function (index) {
        $(this).css('background', linear);
        $(this).find('span').text(data[index].title.length >= 6 ? data[index].title.substring(0, 5) + '...' : data[index].title);
        $(this).find('i').text(data[index].rating.average === 0 ? '暂无评分' : data[index].rating.average);
    });
};

setShowingUpTop = data => {
    let i = 1;
    $('.showing-up .normal-span').each( function (index) {
         if (i <= 3){
             $(this).find('.rank-index').addClass('rank-index-top');
         }
         $(this).find('.rank-index').text(i);
         $(this).find('.movie-name').text(data[index].subject.title);
         $(this).find('.movie-box').text(IntegerToWan(data[index].box));
         i ++;
    });

    $('.showing-up .movie-top .movie-list').find('.loading').css('display', 'none');
    $('.showing-up .movie-top .movie-list').find('.movie-ul').css('display', 'block');
};