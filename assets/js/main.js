$(document).ready(function(){
  // navbar scroll
	$(window).scroll(function(){
	    	if($(window).scrollTop() >0){
	    		$('#navbar').addClass('navbar-scroll') ;
	    	}else{
	    		$('#navbar').removeClass('navbar-scroll') ;
	    	}
	    }) ;

  // slider slick
	 $('.testi-content').slick({
		 dots: true,
		 autoplay: true,
  	autoplaySpeed: 2000,
	 });
 });
