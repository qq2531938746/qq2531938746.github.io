var o = jQuery.noConflict();
o(function(){
    o('.icon').click(function(){
        o('.wrap-left').animate({
            left:'-500px'
        });
    })
})
o(function(){
    o('.right').click(function(){
        o('.wrap-left').animate({
            left:'0px'
        })
    })
})