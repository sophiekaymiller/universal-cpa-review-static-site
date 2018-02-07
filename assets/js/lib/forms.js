export function serializeFormToObject($form) {
    let formData = {};
    $form.serializeArray().map(x => { formData[x.name] = x.value; });

    return formData;
}