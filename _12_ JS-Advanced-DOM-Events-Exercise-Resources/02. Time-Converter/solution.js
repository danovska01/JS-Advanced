function attachEventsListeners() {
    // Get all the input elements and button elements
    const daysInputElement = document.getElementById('days');
    const hoursInputElement = document.getElementById('hours');
    const minutesInputElement = document.getElementById('minutes');
    const secondsInputElement = document.getElementById('seconds');

    const daysBtnElement = document.getElementById('daysBtn');
    const hoursBtnElement = document.getElementById('hoursBtn');
    const minutesBtnElement = document.getElementById('minutesBtn');
    const secondsBtnElement = document.getElementById('secondsBtn');

    // Add click event listeners to the buttons
    daysBtnElement.addEventListener('click', convertDays);
    hoursBtnElement.addEventListener('click', convertHours);
    minutesBtnElement.addEventListener('click', convertMinutes);
    secondsBtnElement.addEventListener('click', convertSeconds);

    function convertDays() {
        const daysValue = parseFloat(daysInputElement.value);
        hoursInputElement.value = (daysValue * 24).toFixed(2);
        minutesInputElement.value = (daysValue * 24 * 60).toFixed(2);
        secondsInputElement.value = (daysValue * 24 * 60 * 60).toFixed(2);
    }

    function convertHours() {
        const hoursValue = parseFloat(hoursInputElement.value);
        daysInputElement.value = (hoursValue / 24).toFixed(2);
        minutesInputElement.value = (hoursValue * 60).toFixed(2);
        secondsInputElement.value = (hoursValue * 60 * 60).toFixed(2);
    }

    function convertMinutes() {
        const minutesValue = parseFloat(minutesInputElement.value);
        daysInputElement.value = (minutesValue / (24 * 60)).toFixed(2);
        hoursInputElement.value = (minutesValue / 60).toFixed(2);
        secondsInputElement.value = (minutesValue * 60).toFixed(2);
    }

    function convertSeconds() {
        const secondsValue = parseFloat(secondsInputElement.value);
        daysInputElement.value = (secondsValue / (24 * 60 * 60)).toFixed(2);
        hoursInputElement.value = (secondsValue / (60 * 60)).toFixed(2);
        minutesInputElement.value = (secondsValue / 60).toFixed(2);
    }
}
