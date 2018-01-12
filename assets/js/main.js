$(document).ready(function(){
  // navbar scroll
	$(window).scroll(function(){
	    	if($(window).scrollTop() >0){
	    		$('#main-navbar').addClass('navbar-scroll') ;
	    	}else{
	    		$('#main-navbar').removeClass('navbar-scroll') ;
	    	}
	    }) ;

  // slider slick
	 $('.testi-content').slick({
		 dots: true,
		 autoplay: true,
  	autoplaySpeed: 2000,
	 });

   // lightcase
	 $('a[data-rel^=lightcase]').lightcase();
 });
