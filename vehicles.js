$(document).ready(function(){
    $('.aside-engine ul a').click(function () {
        const pageId = $(this).data('page-id');
        $('.page').slideUp(1000);
        $(`#${pageId}-page`).slideDown(1000);

        $('.menu a').removeClass('selected');
        $(this).addClass('selected');
    });

    // 
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });
});