
//$GlobalCount = 0;

var nameSkin = 'MicroCultSkin',
	nameMouth = 'MicroCultMouth',
	nameGut = 'MicroCultGut',
	nameAirway = 'MicroCultAirway',
	countSkin = 40,
	countMouth = 50,
	countGut = 39,
	countAirway = 43,
	allCount = 0,
	timeInSecondsToGetNewTweets = 30,
    // numOfTweets = 10,
    // $ul = $('ul'),
    // list='',
    //url = 'http://sxsw.melaniebossert.com/06/twitter/?q=' + searchTerm + '&count=' + numOfTweets;
    //url = 'http://sxsw.melaniebossert.com/06/twitter/?screen_name=' + nameSkin;
    url = 'http://sxsw.melaniebossert.com/twitter/?screen_name=MicroCultGut,MicroCultSkin,MicroCultMouth,MicroCultAirway';
	//url = 'http://sxsw.melaniebossert.com/06/twitter/?screen_name=MicroCultGut';

    
   function loadFollowerCount(){
   		$.get(url, function (data) {
   			
   			$.each(data, function(index) {
   				
   				if((data[index].screen_name) == 'MicroCultGut'){
   					var floraName = (data[index].name);
            		//console.log(floraName);
   				
            		countGut = (data[index].followers_count);
            		//console.log(countGut);
   				}
   				if((data[index].screen_name) == 'MicroCultSkin'){
   					var floraName = (data[index].name);
            		//console.log(floraName);
   				
            		countSkin = (data[index].followers_count);
            		//console.log(countSkin);
            		
   				}
   				if((data[index].screen_name) == 'MicroCultMouth'){
   					countMouth = (data[index].name);
            		//console.log(countMouth);
   				
            		countMouth = (data[index].followers_count);
            		//console.log(countMouth);
   				}
   				if((data[index].screen_name) == 'MicroCultAirway'){
   					var floraName = (data[index].name);
            		//console.log(floraName);
   				
            		countAirway = (data[index].followers_count);
            		//console.log(countAirway);
   				}
   				
   				$('#skin').html(23 + countSkin);
				$('#mouth').html(23 + countMouth);
				$('#gut').html(23 + countGut);
				$('#air').html(23 + countAirway);
				
				// $('#skin').html(countSkin);
				// $('#mouth').html(countMouth);
				// $('#gut').html(countGut);
				// $('#air').html(countAirway);
				
   				$GlobalCount = countSkin + countMouth + countGut + countAirway;
   				
   				var tSkin = map_range(countSkin, 1, 275, 0, 100); 
   				$(".skin").css("width", tSkin + '%');
   				
   				var tMouth = map_range(countMouth, 1, 275, 0, 100); 
   				$(".mouth").css("width", tMouth + '%');
   				
   				var tGut = map_range(countGut, 1, 275, 0, 100); 
   				$(".gut").css("width", tGut + '%');
   				
   				var tAir = map_range(countAirway, 1, 275, 0, 100); 
   				$(".air").css("width", tAir + '%');
        	});
        	
        	

			//countSkin = data.followers_count;
			
			
		});
		// $.get(url1, function (data) {
			// countMouth = data.followers_count;
			// console.log('mouth: ' + countMouth);
		// });
		// $.get(url2, function (data) {
			// countGut = data.followers_count;
			// console.log('gut: ' + countMouth);
		// });
		// $.get(url3, function (data) {
			// countAirway = data.followers_count;
			// console.log('airway: ' + countMouth);
		// });
		 
		$GlobalCount = countSkin + countMouth + countGut + countAirway;
		//console.log('all: ' + $GlobalCount);
		console.log("(.)(.)");
		setTimeout(loadFollowerCount, timeInSecondsToGetNewTweets * 1000);
   } 
    
    //start
    loadFollowerCount();

	function map_range(value, low1, high1, low2, high2) {
    	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
	}

