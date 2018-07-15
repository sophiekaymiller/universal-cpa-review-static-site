import { Validation } from 'bunnyjs/src/Validation';
import postToZapierWebhook from "./zaps";


export function serializeFormToObject($form) {
    let formData = {};
    $form.serializeArray().map(x => { formData[x.name] = x.value; });

    return formData;
}

export function setupValidation($form) {
    // DO NOT USE Validation.init. It is buggy and will prevent you from blocking form submissions.
    Validation.initInline($form.get(0));

    // since the validation doesnt catch the scenario where i never keydown in an input (for inline validation), we
    // require the use of the 'ucr-nokeys' class to determine (initially) whether a field should have a valid indicator
    $form.find('.form-group').on('keyup', evt => {
        $(evt.currentTarget).removeClass('ucr-nokeys');

        const isValidPromise = Validation.validateSection($form.get(0));
        // isValidPromise resolves with true if the form is valid, or a list of the invalid fields if invalid
        isValidPromise.then(isValid => {
            isValid === true ? $form.find('.btn').removeAttr('disabled') : $form.find('.btn').attr('disabled', true);
        })
    });

    return Validation;
}

/**
 * zapier forms have the unique property that we don't want to allow the form submission, and we want to POST the
 * form data to either a provided webhook URL (or use the forms' action as a fallback)
 * @param $form
 * @param webhookUrl
 */
export function zapierForm($form, webhookUrl) {
    const submissionUrl = webhookUrl || $form.attr('action');

    $form.on('submit', evt => {
        evt.preventDefault();

        postToZapierWebhook(submissionUrl, serializeFormToObject($form))
            .then(() => {
                $form.find('.alert').removeClass('d-none').addClass('show');
            });
    });
}