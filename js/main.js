$(function() {
    $('.main_ques__tit').on('click', function() {
        $(this).siblings().toggleClass('isActive').slideToggle();
        $(this).toggleClass('isActive');
    });
    function burg(){
        var burgerWr = $('.burger-wrap'),
        burgerBtn = $('.burger-btn'),
        burgerBody = $('.burger-body'),
        burgerCloseBtn = $('.burger-close-btn');
        
        burgerBtn.on('click', function(){
        $(burgerWr).addClass('opened');
        $('html').addClass('owf');
        });
        
        burgerCloseBtn.on('click', function(){
        $(burgerWr).removeClass('opened');
        $('html').removeClass('owf');
        })
    }
    
    burg();
    
    
    $(document).on('click', function(e){
        if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
        return
        
        $('.burger-wrap').removeClass('opened');
        $('html').removeClass('owf');
    });
    $('.site-panel-wrap .burger__menu ul li a').on('click', function() {
        $('.burger-wrap').removeClass('opened');
        $('html').removeClass('owf');
    })
})