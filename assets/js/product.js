import createCountdown from './lib/countdown.js';
import { enhancedEcommerce } from './lib/ga.js';

createCountdown(
    $('.ucr-thin-banner .ucr-release-date'),
    new Date(window.UCR.SCORES_RELEASE_DATE).getTime()
);

$('.btn-buy').on('click', evt => {
    evt.preventDefault();
    evt.stopPropagation();

    enhancedEcommerce.addToCart(window.UCR.PageProduct, $(evt.currentTarget).attr('href'));
});

