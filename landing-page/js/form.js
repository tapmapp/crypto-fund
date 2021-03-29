(function($) {
  
    "use strict";
    

$(document).ready(function() {
    // $('.form_error').hide();
    $('#submit').click(function(e) {
        e.preventDefault();
        $('input').removeClass('error');
        $('textarea').removeClass('error');

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

        if (email == '') {
            $('#email').addClass('error');
            error = true;
        }

        if (IsEmail(email) === false) {
            $('#email').addClass('error');
            error = true;
        }

        if (referral == '') {
            $('#referral').addClass('error');
            error = true;
        }

        if (message == '') {
            $('#message').addClass('error');
            error = true;
        }
        
        console.log(error);

        if (error) return false;
        
        //ajax call
        $.post("http://localhost:8080/api/form/send-message", { name, email, phone, referral, message }, function(response) {
            console.log(response);
            /*
            $('#contactform').fadeOut('slow',function() {
                $('#success').html(response);
                $('#success').fadeIn('slow');
            });
            */
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
