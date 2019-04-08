$($('.top_content a:first')).addClass('active');

$('.top_content a').on('click', function () {
    $('.top_content a').removeClass('active');
    $(this).addClass('active');
});