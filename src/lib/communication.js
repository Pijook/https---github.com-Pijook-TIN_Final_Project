const url = 'http://localhost:3000/';

async function sendRequest(path, sendMethod, bodyToSend) {
    console.log(`Sending ${sendMethod} request to ${path}`);
    await fetch(url + path, {
        method: sendMethod,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyToSend)
    });
}

export default sendRequest;