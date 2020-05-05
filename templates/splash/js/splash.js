var COLLAPSED = false;

$(document).ready(function() {
    var collapseHeight = document.getElementById("newload-splash").scrollHeight;
    $(this).scroll(function() {
        // if user scrolls about halfway down the splash before it's been collapsed, collapse early
        if ($("#newload-splash")[0].style.maxHeight != 0) {
            var pos = $(window).scrollTop();
            if (pos > collapseHeight / 1.6 && !COLLAPSED) {
                collapseAway();
                COLLAPSED = true;
                return;
            }
        } 
    })
    $("#splash-collapse").click(function() {
        if ($("#newload-splash")[0].style.maxHeight != 0 && !COLLAPSED) {
            collapseAway();
            COLLAPSED = true;
            return;
        }
    });
    setTimeout(collapseAway, 7000);
})

function collapseAway() {
    if (COLLAPSED) return;

    if ($(window).scrollTop() > 769) $("#splash-collapse").fadeOut(400);
    else $("#splash-collapse").hide();

    $("#newload-splash").fadeOut(1200);

    $("#newload-splash")[0].style.maxHeight = 0;

    COLLAPSED = true;
}