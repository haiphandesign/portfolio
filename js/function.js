// Generate Header & Footer

$("#header").load("../header.html"); 
$("#footer").load("../footer.html");

// Generate Grids
$( "#header" ).before( "<div class='hai-background-grids'><div class='hai-background-grid'></div><div class='hai-background-grid'></div><div class='hai-background-grid'></div></div>" );


// Full-height Website

$(document).ready(function() {
	setTimeout(function() {
		headerheight = $("#header").outerHeight(true);
		footerheight = $("#footer").outerHeight(true);
		bodyheight = $(window).height();
		mainheight = bodyheight - headerheight - footerheight;
		$('#main').css('min-height', mainheight + 'px');
   }, 100);
});

// Change navigation active class

$(document).ready(function() {
	setTimeout(function() {
		if ($("body").hasClass("page-about")){
			$(".nav ul li:eq(0) a").addClass("active");
		};
		if ($("body").hasClass("page-works")){
			$(".nav ul li:eq(1) a").addClass("active");
		};
		if ($("body").hasClass("page-lab")){
			$(".nav ul li:eq(2) a").addClass("active");
		};	
   }, 100);
});
