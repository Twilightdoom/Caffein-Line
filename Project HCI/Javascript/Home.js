$(document).ready(function () {

    $('#before').click(function () {
        var currImg = $('.active')
        var nextImg = currImg.next()
        if (nextImg.length) {
            currImg.removeClass('active')
            nextImg.addClass('active')
        }
    });
    
    $('#after').click(function () {
        var currImg = $('.active')
        var prevImg = currImg.prev()
        if (prevImg.length) {
            currImg.removeClass('active')
            prevImg.addClass('active')
        }
    });
    
    });

 