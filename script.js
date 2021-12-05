$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu,.outline').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.b').click(function(event){
        $('.header_burger,.header_menu,.outline').removeClass('active');
        $('body').removeClass('lock');
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
});

$('#orderDefine li a').on('click', function() {
		
    var order = $(this).prop('rel');
    
    $('#orderDefine li a.active').removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('active')) {
        $('.latest').removeClass('active');
        $('.popular').removeClass('active');
        $('.throwbacks').removeClass('active');
    }
    if (order == 'all') {
        $('.latest').toggleClass('active');
        $('.popular').removeClass('active');
        $('.throwbacks').removeClass('active');
    }
    if (order == 'popular') {
        $('.popular').toggleClass('active');
        $('.latest').removeClass('active');
        $('.throwbacks').removeClass('active');
    }
    if (order == 'throwback') {
        $('.throwbacks').toggleClass('active');
        $('.latest').removeClass('active');
        $('.popular').removeClass('active');
    } 
});
