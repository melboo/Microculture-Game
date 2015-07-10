function cycleImages(){
    var image = new Array ();
	image[0] = "img/backgrounds/2.jpg";
	image[1] = "img/backgrounds/3.jpg";
	image[2] = "img/backgrounds/4.jpg";
	image[3] = "img/backgrounds/5.jpg";
	image[4] = "img/backgrounds/6.jpg";
	image[5] = "img/backgrounds/7.jpg";
	image[6] = "img/backgrounds/8.jpg";
	image[7] = "img/backgrounds/9.jpg";
	image[8] = "img/backgrounds/10.jpg";
	image[9] = "img/backgrounds/11.jpg";
	image[10] = "img/backgrounds/12.jpg";
	var size = image.length
	var x = Math.floor(size*Math.random())

	$('#random').attr('src',image[x]);
}

$(window).resize(function(){
    var wh = $(window).height();
    var ww = $(window).width();
    var ih = $('img').height(); 
    var iw = $('img').width(); 
    if(wh>ih)$('img').css('top', (wh-ih)/2+'px');
    if(ww>iw)$('img').css('left', (ww-iw)/2+'px');
})
$(window).resize();


$(window).load(function() {	//start after HTML, images have loaded
		  cycleImages();

	var InfiniteRotator = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn1 = 0;
			var initialFadeIn2 = 0;
			var initialFadeIn3 = 0;
			
			//interval between items (in milliseconds)
			var itemInterval1 = 7000;
			var itemInterval2 = 6000;
			var itemInterval3 = 8000;

			//cross-fade time (in milliseconds)
			var fadeTime1 = 100;
			var fadeTime2 = 100;
			var fadeTime3 = 100;

			//count number of items
			var numberOfItems1 = $('.rotating-item1').length;
			var numberOfItems2 = $('.rotating-item2').length;
			var numberOfItems3 = $('.rotating-item3').length;

			//set current item
			var currentItem1 = 0;
			var currentItem2 = 0;
			var currentItem3 = 0;

			//show first item
			$('.rotating-item1').eq(currentItem1).fadeIn(initialFadeIn1);
			$('.rotating-item2').eq(currentItem2).fadeIn(initialFadeIn2);
			$('.rotating-item3').eq(currentItem3).fadeIn(initialFadeIn3);

			//loop through the items		
			var infiniteLoop1 = setInterval(function(){
				$('.rotating-item1').eq(currentItem1).fadeOut(fadeTime1);

				if(currentItem1 == numberOfItems1 -1){
					currentItem1 = 0;
				}else{
					currentItem1++;
				}
				$('.rotating-item1').eq(currentItem1).fadeIn(fadeTime1);

			}, itemInterval1);	
				var infiniteLoop2 = setInterval(function(){
				$('.rotating-item2').eq(currentItem2).fadeOut(fadeTime2);

				if(currentItem2 == numberOfItems2 -1){
					currentItem2 = 0;
				}else{
					currentItem2++;
				}
				$('.rotating-item2').eq(currentItem2).fadeIn(fadeTime2);

			}, itemInterval2);	
				var infiniteLoop3 = setInterval(function(){
				$('.rotating-item3').eq(currentItem3).fadeOut(fadeTime3);

				if(currentItem3 == numberOfItems3 -1){
					currentItem3 = 0;
				}else{
					currentItem3++;
				}
				$('.rotating-item3').eq(currentItem3).fadeIn(fadeTime3);

			}, itemInterval3);	

		}	
	};

	InfiniteRotator.init();
	
});