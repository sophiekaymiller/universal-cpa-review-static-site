import { Validation } from 'bunnyjs/src/Validation';


export function serializeFormToObject($form) {
    let formData = {};
    $form.serializeArray().map(x => { formData[x.name] = x.value; });

    return formData;
}

export function setupValidation($form) {
    // DO NOT USE Validation.init. It is buggy and will prevent you from blocking form submissions.
    Validation.initInline($form.get(0));
    return Validation;
}