const first = require('@monorepo/package1');
const second = require('@monorepo/package2');
const app = () => 'Hi from the app';
const main = () => {
    console.log(app());
    console.log(first());
    console.log(second());
};

main();

module.exports = { app, main };