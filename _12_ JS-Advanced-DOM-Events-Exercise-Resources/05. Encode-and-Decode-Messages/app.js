function encodeAndDecodeMessages() {
    const encodeButton = document.querySelectorAll('button')[0];
    const decodeButton = document.querySelectorAll('button')[1];
    const senderTextarea = document.querySelectorAll('textarea')[0];
    const receiverTextarea = document.querySelectorAll('textarea')[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let message = senderTextarea.value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            let currentChar = message[i];
            let encodedChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
            encodedMessage += encodedChar;
        }

        receiverTextarea.value = encodedMessage;
        senderTextarea.value = '';
    }

    function decodeMessage() {
        let encodedMessage = receiverTextarea.value;
        let decodedMessage = '';

        for (let i = 0; i < encodedMessage.length; i++) {
            let currentChar = encodedMessage[i];
            let decodedChar = String.fromCharCode(currentChar.charCodeAt(0) - 1);
            decodedMessage += decodedChar;
        }

        receiverTextarea.value = decodedMessage;
    }
}
