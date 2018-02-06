import Backbone from 'backbone';

const jobsWebhook = 'https://hooks.zapier.com/hooks/catch/2938588/zd3m0g/';

const JobApplicationView = Backbone.View.extend({
    events: {
        'submit': 'submitForm'
    },

    submitForm(evt) {
        evt.preventDefault();

        const $form = this.$el.find('form');

        let formData = {};
        $form.serializeArray().map(x => { formData[x.name] = x.value; });

        const _this = this;
        $.ajax({
            type: 'POST',
            url: jobsWebhook,
            dataType: 'json',
            data: formData
        }).then(() => {
            _this.$el.find('.alert').addClass('show');
        });
    }
});


$('.card').each(function() {
    new JobApplicationView({ el: $(this).get(0) })
});