Zepto(function ($) {
    // 获取文档的根节点
    var doc = document.documentElement;

    function setFontSize() {
        // 获取当前窗口的宽度
        var winWidth = $(window).width();
        // 640 宽度以上进行限制
        var size = winWidth / 640 * 100;
        doc.style.fontSize = (size < 100 ? size : 100) + "px";
        console.log(winWidth)
    }

    // 防止在 html 未加载完毕时执行，保证获取正确的页宽
    setTimeout(function () {
        // 初始化
        setFontSize();
    }, 200);
});