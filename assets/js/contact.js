import postToZapierWebhook from './lib/zaps';
import { serializeFormToObject, setupValidation } from './lib/forms';


const $form = $('.ucr-section-hero form');
const validation = setupValidation($form, true);

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

// since the validation doesnt catch the scenario where i never keydown in an input (for inline validation), we
// require the use of the 'ucr-nokeys' class to determine (initially) whether a field should have a valid indicator
$form.find('.form-group.ucr-field-indicator').on('keyup', evt => {
    $(evt.currentTarget).removeClass('ucr-nokeys');

    const isValidPromise = validation.validateSection($form.get(0));
    // isValidPromise resolves with true if the form is valid, or a list of the invalid fields if invalid
    isValidPromise.then(isValid => {
        isValid === true ? $form.find('.btn').removeAttr('disabled') : $form.find('.btn').attr('disabled', true);
    })
});
