$(document).ready(function () {
    $("#customization-form").on("submit", function (e) {
        e.preventDefault();

        // Get user selections
        const color = $("#car-color").val();
        const decal = $("#car-decal").val();

        // Apply color and decal to the car
        $("#car").css("background-color", color).removeClass().addClass(decal);
    });
});
