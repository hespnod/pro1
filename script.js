// const posts = [{ title: 'POST1' }];

// function updateLastUserActivityTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const lastactivityTime = new Date().toISOString();
//             resolve(lastactivityTime);
//         }, 1000)
//     })
// }

// function createPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'NEW POST' });
//             resolve()
//         }, 3000)
//     })
// }

// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const delpost = posts.pop();
//             resolve(delpost);
//         }, 1000)
//     })
// }

// Promise.all([createPost, updateLastUserActivityTime, deletePost, updateLastUserActivityTime]).then((([c, u, d]) => { console.log(u) })};
// console.log("hello")

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const premovie = async () => {
    const promiseWifeBringTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ticket');
        }, 3000)
    })
    const getpopcorn = new Promise((res, rej) => res('Popcorn'));
    const addButter = new Promise((res, rej) => res('Butter'));
    let ticket = await promiseWifeBringTicket;
    console.log(`Wife: I have the ${ticket}`);
    console.log(`Husband: we should go in`);
    console.log(`Wife: No im hungry`);
    let popcorn = await getpopcorn;
    console.log(`Husband: I got some ${popcorn}`);
    let butter = await addButter;
    console.log(`Husband: I've added some ${butter}`);
    return ticket;
}

premovie().then((msg) => console.log(msg));
console.log('person 4: shows ticket');
console.log('person 5: shows ticket');