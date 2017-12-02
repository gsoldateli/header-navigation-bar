(function(window){
	var scrollEvent,
		scrollPageEvent;

	function scrollX(x) {
		document.querySelector('.project-list').scrollLeft += x ;	
	}

	document.querySelector('.project-list-arrow.left').addEventListener('mouseover',function(){
		scrollEvent = setInterval(function(){
			scrollX(-3);}
			,10);
	});

	document.querySelector('.project-list-arrow.right').addEventListener('mouseover',function(){
		scrollEvent = setInterval(function(){
			scrollX(3);}
			,10);
	});

	document.querySelector('.project-list-arrow.left').addEventListener('mouseout',function(){
		clearInterval(scrollEvent);
	});

	document.querySelector('.project-list-arrow.right').addEventListener('mouseout',function(){
		clearInterval(scrollEvent);
	});


	window.scrollPageTo = function(selector) {
		var yPos = document.querySelector(selector).offsetTop;
		window.scroll(0,yPos - 80);	
	}
})(window);

