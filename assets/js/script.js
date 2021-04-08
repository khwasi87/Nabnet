function toggleAccord(pthis) {
    $(pthis).on("click", function() {
        $(".accordion-body").toggleClass("accordion-expand");
        $(".fa-caret-down").toggleClass("fa-caret-up");
    });
}