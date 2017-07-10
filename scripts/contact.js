var width = $(window).width();
var shouldExpand = width < 725;
var shouldShrink = width >= 725;

$(function () {
    $('#email-checkbox').change(function() {
        if (this.checked) {
            $('#email-submit').removeAttr('disabled');
            $('#email-submit').fadeIn("slow");
            
        } else {
            $('#email-submit').attr('disabled', 'disabled');
            $('#email-submit').fadeOut("slow");
        }
    });

    if (width < 725) {
        $('div.email').hide();
        $('#email-mobile-link').show();
    }
});

$(window).resize(function () {
    calculateWidth();
});

function calculateWidth() {
    width = $(window).width();

    if (width < 725 && shouldShrink) {
        shouldShrink = false;
        shouldExpand = true;
        $('div.email').hide();
        $('#email-mobile-link').show();
    } else if (width >= 725 && shouldExpand) {
        shouldShrink = true;
        shouldExpand = false;
        $('div.email').show();
        $('#email-mobile-link').hide();
    }
}

function sendMail() {
    var link = "mailto:joshtylerlowe@gmail.com"
        + "?body=" + escape($('#email-name').val() + " (" + $('#email-emailaddress').val() + ") From " + $('#email-company').val() + ":\n\n" + $('.email-textarea').val());

    window.location.href = link;
}
