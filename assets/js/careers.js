import Backbone from 'backbone';

import postToZapierWebhook from './lib/zaps';
import { serializeFormToObject } from './lib/forms';


const JobApplicationView = Backbone.View.extend({
    events: {
        'submit': 'submitForm'
    },

    submitForm(evt) {
        evt.preventDefault();

        const _this = this;
        postToZapierWebhook(
            'https://hooks.zapier.com/hooks/catch/2938588/zd3m0g/',
            serializeFormToObject(this.$el.find('form'))
        )
        .then(() => {
            _this.$el.find('.alert').addClass('show');
        });
    }
});


$('.card').each(function() {
    new JobApplicationView({ el: $(this).get(0) })
});