$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
		if( $(this).scrollTop() > 0 ){
			$('.cabecera').addClass('cabecera-scroll');
		} else {
			$('.cabecera').removeClass('cabecera-scroll');
		}
	});
	var contador = 1;
	$('.menu').click(function(){
		if (contador == 1) {
			$('.navegacion').show();
			contador = 0;
		} else {
			contador = 1;
			$('.navegacion').hide();
		}
	});

	// Mostramos y ocultamos submenus
	$('.subnavegacion').click(function(){
		$(this).children('.mas').slideToggle();
	});
});