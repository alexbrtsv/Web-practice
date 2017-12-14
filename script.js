let count = 0;

$('#next').on('click', function() {
    $('.testemonials .quote').eq(count).removeClass('show');
    $('.testemonials .author').eq(count).removeClass('show');
    if (count == ($('.testemonials .quote').length - 1)) count = -1;
    $('.testemonials .quote').eq(++count).addClass('show');
    $('.testemonials .author').eq(count).addClass('show');
});

$('#prev').on('click', function() {
    $('.testemonials .quote').eq(count).removeClass('show');
    $('.testemonials .author').eq(count).removeClass('show');
    if (count == 0) count = $('.testemonials .quote').length;
    $('.testemonials .quote').eq(--count).addClass('show');
    $('.testemonials .author').eq(count).addClass('show');
});

function subBtnColor() {
    let email = $("#email").val();
    if (email && email.indexOf('@') > -1 && email.indexOf('.') > -1) {
        $('#sub').css({ 'background': 'green' }).text('Done');
        $('#email').val('');
        setTimeout("$('#sub').css({ 'background': '#267599' }).text('subscribe now')", 3000);
    } else { alert('Check your email') };
}