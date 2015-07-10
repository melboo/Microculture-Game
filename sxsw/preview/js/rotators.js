// function cycleImages(){
//       var $active = $('#background_cycler .active');
//       var $next = ($('#background_cycler .active').next().length > 0) ? $('#background_cycler .active').next() : $('#background_cycler img:first');
//       $next.css('z-index',2);//move the next image up the pile
// 	  $active.fadeOut(1500,function(){//fade out the top image
// 	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
//       $next.css('z-index',3).addClass('active');//make the next image the top one
//       });
//     }

	 //$(window).load(function() {	//start after HTML, images have loaded
		//$('#background_cycler').fadeIn(1500);//fade the background back in once all the images are loaded
		  // run every 7s
		// setInterval('cycleImages()', 7000);
		  

$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotator = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 1000;
			
			//interval between items (in milliseconds)
			var itemInterval = 5000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 2500;
			
			//count number of items
			var numberOfItems = $('.rotating-item').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotator.init();
	
});