var o = jQuery.noConflict();
o(function(){
	o('.lt').click(function(){
		o('.list1').slideToggle('slow');
		console.log(1)
	})
});