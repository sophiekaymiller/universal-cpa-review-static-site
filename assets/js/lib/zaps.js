export default function postToZapierWebhook(webhookUrl, data) {
    return $.ajax({
        type: 'POST',
        url: webhookUrl,
        dataType: 'json',
        data: data
    });
}