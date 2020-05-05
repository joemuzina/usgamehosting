$(document).ready(function() {
    setTimeout(collapseAway, 15000);
})

function collapseAway() {
    var maxHeight = $("#newload-splash")[0].style.maxHeight;

    for (curHeight = maxHeight.substr(0, maxHeight.length - 2); curHeight > 0; curHeight = curHeight - 1) { 
        str = "";
        var newHeight = str + curHeight + " px";
        $("#newload-splash")[0].style.maxHeight = newHeight;
    }
}