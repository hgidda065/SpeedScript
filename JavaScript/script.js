$(document).ready(function () {

    const sections = $("section"); // Select all sections
    const navLinks = $("aside ul li a"); // Select all aside links

    // Function to update the active section
    function updateActiveSection() {
        let scrollPosition = $(document).scrollTop() + 300; // Current scroll position (+300 for offset)

        sections.each(function () {
            let sectionTop = $(this).offset().top;
            let sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                let currentId = $(this).attr("id"); // Get the ID of the current section

                // Update the active link
                navLinks.removeClass("active");
                $("aside ul li a[href='#" + currentId + "']").addClass("active");
            }
        });
    }

    // Attach the scroll event to update the active section
    $(window).on("scroll", updateActiveSection);

    // Call once on page load to set the initial active section
    updateActiveSection();


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

    $(window).on("scroll", function () {
        const section = $("#track-preview");
        const sectionTop = section.offset().top;
        const sectionHeight = section.outerHeight();
        const windowHeight = $(window).height();
        const windowScrollTop = $(window).scrollTop();
    
        // Check if the section is in the viewport
        if (windowScrollTop + windowHeight > sectionTop && windowScrollTop < sectionTop + sectionHeight) {
            $(".track-image, .track-text").each(function (index) {
                if ($(this).offset().top < windowScrollTop + windowHeight) {
                    if (!$(this).hasClass("visible")) {
                        $(this).addClass("visible");
                        $(this)
                            .delay(index * 400) // Delay based on index (400ms per item)
                            .slideDown(800); // Slide the entire track-item
                    }
                }
            });
        }
    });

    // Smooth scroll to the landing section when the corresponding link is clicked
    $("a[href='#landing']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the landing section
        $('html, body').stop(true, true).animate({
            scrollTop: $("#landing").offset().top
        }, 100, 'swing');
    });

    // Smooth scroll to the car preview section when the corresponding link is clicked
    $("a[href='#car-preview']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the car preview section
        $('html, body').animate({
            scrollTop: $("#car-preview").offset().top
        }, 100, 'swing');
    });

    // Smooth scroll to the track preview section when the corresponding link is clicked
    $("a[href='#track-preview']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the track preview section
        $('html, body').animate({
            scrollTop: $("#track-preview").offset().top
        }, 100, 'swing');
    });

    // Smooth scroll to the gallery section when the corresponding link is clicked
    $("a[href='#gallery']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the gallery section
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 100, 'swing');
    });



    // Smooth scroll to the contact section when the corresponding link is clicked
    $("a[href='#contact']").click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Animate the scroll to the top of the contact section
        $('html, body').stop(true, true).animate({
            scrollTop: $("#contact").offset().top
        }, 100, 'swing');
    });
});