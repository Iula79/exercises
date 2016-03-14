//creating my own function in JQuery
$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    //calculating the coordinates for the div that I am operating on
    var bounds = this.offset();
    //calculating the boundaries of the image of when the image goes out of view
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

window.setInterval(function() {
    if ($('#catimage').isOnScreen() === true) {
        console.log("image is on screen");
    }
    else {
        console.log("image is not on screen");
    }
},2000);
