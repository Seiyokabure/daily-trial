$('.accordion-head').click(function () {
$(this).next().slideToggle();
$(this).children('.accordion-icon').toggleClass( 'is-open' );
});

$(document).ready(function() {
    $('.drawer').drawer();

});

