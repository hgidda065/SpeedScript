$(document).ready(function () {
    // Attach a submit event handler to the car customization form
    $("#customization-form").on("submit", function (e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Retrieve the selected car color from the color input field
        const color = $("#car-color").val();
        // Retrieve the selected decal class from the decal input field
        const decal = $("#car-decal").val();

        // Fade out the car element for a smooth transition effect
        $("#car").fadeOut(200, function() {
            // Apply the selected color to the car's background
            // Remove any existing decal classes and add the new decal class
            $("#car").css("background-color", color).removeClass().addClass(decal);

            // Fade the car element back in with the new customization applied
            $("#car").fadeIn(500);
        });
    });

    // Attach a click event handler to the menu button for toggling the navigation menu
    $("#menu").click(function() {
        // Stop any ongoing animations and toggle the visibility of the aside element with a sliding effect
        $("aside").stop(true, true).slideToggle(500);
    });

    // Smooth scroll to the landing section when the corresponding link is clicked
    $("a[href='#landing']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the landing section
        $('html, body').stop(true, true).animate({
            scrollTop: $("#landing").offset().top
        }, 1000, 'swing');
    });

    // Smooth scroll to the about section when the corresponding link is clicked
    $("a[href='#about']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the about section
        $('html, body').stop(true, true).animate({
            scrollTop: $("#about").offset().top
        }, 1000, 'swing');
    });

    // Smooth scroll to the car preview section when the corresponding link is clicked
    $("a[href='#car-preview']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the car preview section
        $('html, body').animate({
            scrollTop: $("#car-preview").offset().top
        }, 1000, 'swing');
    });

    // Smooth scroll to the contact section when the corresponding link is clicked
    $("a[href='#contact']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the contact section
        $('html, body').stop(true, true).animate({
            scrollTop: $("#contact").offset().top
        }, 1000, 'swing');
    });
});