$('*').each(function(){
    if ($(this).is('img')) {
        console.log($(this).attr('src'));
        $(this).attr('src', 'http://i.imgur.com/u53p5p6.jpg');
    }
});