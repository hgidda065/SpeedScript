$(document).ready(function () {
    // Car customization
    $("#customization-form").on("submit", function (e) {
        e.preventDefault();

        // Get user selections
        const color = $("#car-color").val();
        const decal = $("#car-decal").val();

        // Fade out car for smooth transition
        $("#car").fadeOut(200, function() {
            // Apply color and decal to the car
            $("#car").css("background-color", color).removeClass().addClass(decal);

            // Fade the car back in with the new customization
            $("#car").fadeIn(500);
        });
    });

    // Navigation menu animation
    $("#menu").click(function() {
        $("aside").stop(true, true).slideToggle(500);
    });

    $("a[href='#landing']").click(function(event) {
        event.preventDefault();
        $('html, body').stop(true, true).animate({
            scrollTop: $("#landing").offset().top
        }, 1000, 'swing');
    });

    $("a[href='#about']").click(function(event) {
        event.preventDefault();
        $('html, body').stop(true, true).animate({
            scrollTop: $("#about").offset().top
        }, 1000, 'swing');
    });

    $("a[href='#car-preview']").click(function(event) {
        event.preventDefault();
        $('html, body').stop(true, true).animate({
            scrollTop: $("#car-preview").offset().top
        }, 1000, 'swing');
    });

    $("a[href='#contact']").click(function(event) {
        event.preventDefault();
        $('html, body').stop(true, true).animate({
            scrollTop: $("#contact").offset().top
        }, 1000, 'swing');
    });
});


