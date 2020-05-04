$('.close').toggle(
        function()
            {
            $('#style-selector').animate({left: "0px"}, 500);
			
            },
        function()
            {
            $('#style-selector').animate({left: "-262px"}, 500);
			
            }
    );
	

$(window).load(function() {
	$(".loader").fadeOut("slow");
})

window.onload = function(){
    document.body.style.display = "inline";
}