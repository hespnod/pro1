const posts = [{ title: 'POST1' }];

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastactivityTime = new Date().toISOString();
            resolve(lastactivityTime);
        }, 1000)
    })
}

function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'NEW POST' });
            resolve()
        }, 3000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const delpost = posts.pop();
            resolve(delpost);
        }, 1000)
    })
}

createPost().then(() => updateLastUserActivityTime())
    .then((time) => console.log(time))
    .then(() => deletePost())
    .then((msg) => console.log(msg.title));