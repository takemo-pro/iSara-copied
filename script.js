$(function(){
    //ページ内スクロールボタンの表示非表示コード↓↓↓
    $(window).scroll(function(){
        if($("html,body").scrollTop()>250){
            $("#scrollTop-btn").fadeIn();
        }
        else{
            $("#scrollTop-btn").fadeOut();
        }
    });
    //ページ内スクロールボタン動作コード↓↓↓↓↓
    $("#scrollTop-btn").click(function(){
        $("html,body").animate({'scrollTop' : 0 },'slow');
    });

    //入力フォームへ飛ぶボタンの動作コード↓↓↓
    $(".go-form").click(function(){
        var id = $(this).attr("href");
        var position = $(id).offset().top;
        $("html,body").animate({"scrollTop" : position},"slow");
    });

    //アコーディオン動作コード↓↓↓
    $(".question-button").click(function(){
        if($(this).hasClass("open")){
            $(this).siblings(".answerbox").slideUp();
            $(this).attr("data-icon","\f107");
            $(this).removeClass("open");
        }
        else{
            $(this).siblings(".answerbox").slideDown();
            $(this).attr("content","\f106");
            $(this).addClass("open");
        }
    });

    //アコーディオン（スマホ　フロー）
    $(".flow-tgl-btn").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).find("p").removeClass("active");
            $(this).siblings(".flow-box-right").slideUp();
        }
        else{
            $(this).parents(".flow-box-sp").find(".active.flow-tgl-btn").siblings(".flow-box-right").slideUp();
            $(this).parents(".flow-box-sp").find(".active").removeClass("active");
            $(this).addClass("active");
            $(this).find("p").addClass("active");
            $(this).siblings(".flow-box-right").slideDown();
        }
    });
})
