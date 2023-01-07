$(document).ready(function () {
    $('.card').first().toggleClass('active');
    $('.card').hide();
    $('.active').show();
    $('.dot').first('').toggleClass('active');
    $('.dot').show();
    $('#next,.dot').click(function () {
        $('.active').removeClass('active').addClass('oldActive').css('display', 'none');
        if ($('.oldActive').is(':last-child')) {
            $('.card',).first().toggleClass('active');
            $('.dot').first().toggleClass('active');

        }
        else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.card').fadeOut();
        $('.dot').fadeIn().css('background-color', 'white');
        $('.active').fadeIn();
    });

    $('#next').on('click', function () {
        $('.dot.active').css('background-color', 'red');
    });
    // $('.dot').click(function () {
    //     $(this).css('background-color', 'yellow');
    //     $(this).addClass('test');
    //     $('.card').addClass('test');



    // });

    $('#back').click(function () {
        $('.active').removeClass('active').addClass('oldActive').css('display', 'none');
        if ($('.oldActive').is(':first-child')) {
            $('.card').last().toggleClass('active');
            $('.dot').last().toggleClass('active');
        }
        else {
            $('.oldActive').prev().toggleClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.card').fadeOut();
        $('.dot').fadeIn().css('background-color', 'white');
        $('.active').fadeIn();
    });

 
    $('#back').click(function () {
        $('.dot.active').css('background-color', 'red');
    });

});

$(document).ready(function () {
    $('.dot').click(function () {
        var i = $(this).index();
        $(this).css('background-color', 'yellow');
        $(this).addClass('test');
        $('.card').eq(i).addClass('test');


        console.log($(this).index());
    });
});