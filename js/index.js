var senke = {
    init:function(){
        this.bind();
        this.girlAnimate();
    },
    bind:function(){
        $('.system .circle').on('mouseenter', this.systemDescriptionEvent);
        $('.teacher .avatar img').on('mouseover', this.teacherItemEvent);
        $('.performance .card').on('click', this.showPerformance);
        $('.performance .toast-close').on('click', this.hidePerformance);
        $('.leyu').on('click',this.leyuEvent);
        $(window).on('scroll',this.showAsideLeyu);

    },
    systemDescriptionEvent:function(){
        var description = $(this).find('.desc').text();
        $('#systemMessage').html(description);
        $('.system li').removeClass('active');
        $(this).parent('li').addClass('active');
    },
    teacherItemEvent: function () {
        var index = $(this).parent().index();
        //老师内容的显示隐藏效果
        $('.teacher .card > .teacher-item').eq(index).addClass('item-show').siblings().removeClass('item-show');
        //底部滚动条效果
        var pos = index * 120;
        $('.teacher .line > .block').css('left', pos);
    },
    showPerformance: function () {
        var bgImage = $(this).css('background');
        $('.performance .toast-image').css('background', bgImage);
        $('.performance .toast-container').fadeIn();
    },
    hidePerformance: function () {
        $('.performance .toast-container').fadeOut();
    },
    leyuEvent: function () {
        doyoo.util.openChat('g=10063102');return false;
    },
    showAsideLeyu:function(){
        let scroll = $(this).scrollTop();
        let hasClass = $('.zixun-fixed').hasClass('opacity');
        if(scroll > 510 && !hasClass){
            $('.zixun-fixed').addClass('opacity');
        }else if(scroll < 510 && hasClass){
            $('.zixun-fixed').removeClass('opacity');
        }
    },
    girlAnimate:function(){
        setInterval(function(){
            if($(".animated-circles").hasClass("animated")){
                $(".animated-circles").removeClass("animated");
            }else{
                $(".animated-circles").addClass('animated');
            }
        },3000);

        var wait = setInterval(function(){
            $(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
            clearInterval(wait);
        },4500);

        $(".livechat-girl").hover(function(){
            clearInterval(wait);
            $(".livechat-hint").removeClass("hide_hint").addClass("show_hint");
        },function(){
            $(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
        });
    },

}

$(function(){
    senke.init();
})