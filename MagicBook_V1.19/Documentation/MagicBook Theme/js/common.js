jQuery(document).ready(function($){
	$("#sidebar").sticky({topSpacing:30});
	$.localScroll({
			target:'body',
			offset: {left: 0, top: -65}
	});
	
	//Detecting page scroll and set the navigation link active status
	$(window).scroll(function() {
	
			var currentNode = null;
			$('.box').each(function(){
				var currentId = $(this).attr('id');	
				if($(window).scrollTop() >= $('#'+currentId).offset().top - 79)
				{
					currentNode = currentId;
				}
			});
			$('#sidebar li').removeClass('current').find('a[href="#'+currentNode+'"]').parent().addClass('current');
	});
});