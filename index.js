//To Set The Animation On Scrolling On the "What Teachers Are Doing" Section

$(document).ready(function(){
	$(window).scroll(function(){
		var positionTop = $(document).scrollTop();
		console.log("positionTop");

		if((positionTop > 350) && (positionTop < 400)) {
			$('.card').addClass('animated rollIn');
		};
		if((positionTop > 202) && (positionTop < 300)){
			$('.form-input').addClass('animated rollIn')
		}
	});
});
