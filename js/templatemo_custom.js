/* Credit: http://www.templatemo.com */

$(document).ready(function() {
	$('#services .services_buttons li').each( function(){
		$(this).on('click', function(){
			change_panels( $(this).index() );
		});
	});
});

function change_panels(new_index){
	var arrow_positions = [ 20, 110, 205 ];
	var new_top = arrow_positions[new_index] + 'px';
	$('.arrow-left').animate({marginTop:new_top}, 500);
	$('#services_tabs li:nth-child('+(new_index+1)+')').tab('show');
	$('.services_buttons li').removeClass('active');
	$('.services_buttons li:nth-child('+(new_index+1)+')').addClass('active');
}