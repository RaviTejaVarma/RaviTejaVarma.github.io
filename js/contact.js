$(function () {

    // $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        console.log("submitting", $(this).serialize());
        if (!e.isDefaultPrevented()) {
            var url = "/contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: {data: $(this).serialize()},
                success: function (data)
                {
                    alert('success response');
                    console.log('success', data);
                    // var messageAlert = 'alert-' + data.type;
                    // var messageText = data.message;

                    // var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    // if (messageAlert && messageText) {
                    //     $('#contact-form').find('.messages').html(alertBox);
                    //     $('#contact-form')[0].reset();
                    // }
                }, error: function (data)
                {
                    alert('Error submitting data', data);
                }
            });
            return false;
        }
    })
});