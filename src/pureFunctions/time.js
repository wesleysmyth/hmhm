export function createTimer(time) {
    const millisecondsNum = parseInt((time % 1) * 1000, 10);
    const milliseconds = ("00" + millisecondsNum).slice(-3);
    const seconds = ("0" + parseInt(time % 60, 10)).slice(-2);
    const minutes = ("0" + parseInt((time / 60) % 60, 10)).slice(-2);
    const hours = ("0" + parseInt((time / (60 * 60)) % 24)).slice(-2);

    return {
        milliseconds,
        seconds,
        minutes,
        hours,
    };
}
