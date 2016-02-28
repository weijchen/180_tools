$(document).ready(function() {
    function randomColor() {
        var color = '#' + Math.random().toString(16).slice(2, 8);
        return color;
        console.log('color');

    };
    $(".button").on("click", function() {
        var colorCode = randomColor();
        $('body').css('background', colorCode);
        $('#code').html(colorCode.toUpperCase());
    });
});
