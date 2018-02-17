import createCountdown from './lib/countdown.js';


createCountdown(
    $('.ucr-thin-banner .ucr-release-date'),
    new Date(window.UCR.SCORES_RELEASE_DATE).getTime()
);