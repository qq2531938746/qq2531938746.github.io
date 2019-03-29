$(".rep_pic").eq(0).on({
    mouseover:function () {
        var temp = $(this).attr("data-h");
        console.log(temp)
        $(this).attr("src", "img/" + temp + ".png")
    },
    mouseout:function(){
        $(this).attr("src", "img/tel24.png")
    }
})
$(".rep_pic").eq(1).on({
    mouseover:function () {
        var temp = $(this).attr("data-h");
        console.log(temp)
        $(this).attr("src", "img/" + temp + ".png")
    },
    mouseout:function(){
        $(this).attr("src", "img/email.png")
    }
})
$(".rep_pic").eq(2).on({
    mouseover:function () {
        $(this).attr("src", "img/wechat1-h.svg")
    },
    mouseout:function(){
        $(this).attr("src", "img/wechat1.svg")
    }
})