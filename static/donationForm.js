$(function() {
    luminateExtend.init({
        apiKey: 'whee',
        path: {
            nonsecure: 'http://172.20.7.182/site/',
            secure: 'https://172.20.7.182/site/'
        }
    });

    luminateExtend.api.bind();

    $('input[name="level_id"]').change(function() {
        $("#other-amount").prop("disabled", !$("#level-other").is(":checked"));
    });

    $('#donate-submit').click(function() {
        $(this).hide();
        $('#donate-processing').show();
    });
});

function donateCallback(data) {
    console.log(data);
    var invoiceURL = data.donationResponse.donation.bitcoin_invoice_url;
    window.location.href = invoiceURL;
}
