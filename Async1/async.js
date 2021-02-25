const rp = require('request-promise');

async function f() {
    const response = await rp('http://example.com/');
    console.log(response);
}
f().then(() => console.log('Finished'));


async function solution() {
    console.log (await rp)
}