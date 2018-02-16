const timeRemaining = endTime => {
    const now = new Date().getTime();
    const delta = endTime - now;
    const weeks = Math.floor(delta / (1000 * 60 * 60 * 24 * 7));
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(delta / day);
    const hours = Math.floor((delta % day) / (1000 * 60 * 60));
    const minutes = Math.floor((delta % (day / 24)) / (1000 * 60));
    const seconds = Math.floor((delta % ((day / 24) / 60)) / 1000);

    return { weeks, days, hours, minutes, seconds };
};

export default function createCountdownTimer($el, endTime) {
    const pluralize = (val, word) => {
        let result = `${val} ${word}`;
        if (val !== 1) {
            result += 's';
        }

        return result;
    };

    setInterval(() => {
        const timeParts = timeRemaining(endTime);
        $el.html(`${pluralize(timeParts.weeks, 'Week')}, ${pluralize(timeParts.weeks, 'Day')}, ${pluralize(timeParts.hours, 'Hour')}, ${pluralize(timeParts.minutes, 'Minute')}, and ${pluralize(timeParts.seconds, 'Second')}`);
    }, 1000);
}