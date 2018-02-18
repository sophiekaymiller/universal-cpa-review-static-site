import postToZapierWebhook from './lib/zaps';
import { serializeFormToObject, setupValidation } from './lib/forms';


const $form = $('.ucr-section-hero form');
setupValidation($form, true);

// on submit of form, send the form data to zapier
$form.on('submit', evt => {
    evt.preventDefault();
    evt.stopPropagation();

    postToZapierWebhook(
        'https://hooks.zapier.com/hooks/catch/2938588/zmi2b1/',
        serializeFormToObject($form)
    )
    .then(() => {
        $form.find('.alert').removeClass('d-none').addClass('show');
    });

    return false;
});
