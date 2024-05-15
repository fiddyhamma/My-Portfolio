$(document).ready(function(light){
    $('#light').on('click', function () {
    $('#dark').show();
    $('#light').hide();
    $('body').css('background', '#121212');
    $('body').css('color', '#fff');
    $('footer').css('background', '#121212');
    $('.toggle'). css('color', '#fff');
});
});
$(document).ready(function(dark){
    $('#dark').on('click', function () {
    $('#dark').hide();
    $('#light').show();
    $('body').css('background', '#e9f7da');
    $('body').css('color', '#121212');
    $('footer').css('background', '#f9faf9');
    $('.toggle'). css('color', '#800080');
});
});