const postListPromise = new Promise((resolve, reject) => {
    console.log('SENDING LIST CALL')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Call failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(`Call failed for GET POST List Request with status ${err.status}`));
});

const postDetailsPromise = (data) => new Promise((resolve, reject) => {
    console.log('SENDING DETAILS CALL')
    fetch(`https://jsonplaceholder.typicode.com/posts/${data[0].id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Call failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(`DETAILS CALL FAILED and status ${err.status}`));
})

// Promese
postListPromise
    .then(postDetailsPromise)
    .then(response => {
        console.log('POST DETAILS RESPONSE => ', response);
    })
    .catch(error => console.error("Call Failed:", error));
