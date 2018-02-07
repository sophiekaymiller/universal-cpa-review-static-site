import postToZapierWebhook from './lib/zaps';
import { serializeFormToObject } from './lib/forms';


$('.ucr-section-hero form').on('submit', evt => {
    evt.preventDefault();

    const $form = $(evt.currentTarget);
    postToZapierWebhook(
        'https://hooks.zapier.com/hooks/catch/2938588/zmi2b1/',
        serializeFormToObject($form)
    )
    .then(() => {
        $form.find('.alert').addClass('show');
    });
});