(function($) {
  
    "use strict";
    

$(document).ready(function() {

    $('#subscribe').click(function(e) {

        e.preventDefault();

        $('.subscribe-area input').removeClass('error');

        var error = false;

        var subscriber = $('.subscribe-area input').val();

        if (subscribe == '') {
            $('.subscribe-area').addClass('error');
            error = true;
        }

        if (error) return false;

        $.post("https://consultacrypto.com/api/form/subscribe", { subscriber }, function(data) {
            $('.subscribe-area input').val('Suscrito!');
        }).fail(function(data) {

            $('.subscribe-area input').val('Error subscripción!');

            setTimeout(() => {
                $('.subscribe-area input').val('');
            }, 5000);

        });

    });


    $('#submit').click(function(e) {

        e.preventDefault();
        
        $('.form-group input').removeClass('error');
        $('.form-group textarea').removeClass('error');

        var error = false;

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var referral = $('#referral').prop('checked');
        var message = $('#message').val();

        if (name == '' || IsMalicious(name)) {
            $('#name').addClass('error');
            error = true;
        }
 
        if (IsEmail(email) === false || IsMalicious(name)) {
            $('#email').addClass('error');
            error = true;
        }

        if (error) return false;
        
        $('#contact form button').html('Enviando ...');

        //ajax call
        $.post("https://consultacrypto.com/api/form/send-message", { name, email, phone, referral, message }, function(data) {
            $('#contact form').fadeOut(300, function() {
                $('#contact .success-message').addClass('active');
            });
        }).fail(function(data) {

            $('#contact form').fadeOut(300, function() {
                $('#contact .error-message').addClass('active');
            });

            setTimeout(() => {
                $('#contact .error-message').removeClass('active');
                $('#contact form').fadeIn(300);
            }, 5000);

        });
    
    });
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}

function IsMalicious(field) {
    var regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if(!regex.test(field)) {
        return false;
    } else {
        return true;
    }
}


}(jQuery));
