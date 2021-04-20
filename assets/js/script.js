$(document).ready(function() {
    $('#accordion .accordion-body').hide();
    $('#accordion .accordion-header span').click(function() {
        $(this).parent().next().slideToggle()
            .siblings('.accordion-body').slideUp();
        return false;
    });
});