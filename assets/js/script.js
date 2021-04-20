$(document).ready(function() {
    $('#accordion .accordion-body').hide();
    $('#accordion .accordion-header span').click(function() {
        $('.fa-angle-down').toggleClass('.fa-angle-up');
        $(this).parent().next().slideToggle()
            .siblings('.accordion-body').slideUp();
        return false;
    });
});