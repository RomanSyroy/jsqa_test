// src/app/index.js
require('./util/console');
const config = require('./config');
const course = require('./course');

console.h1('Hello world!!!');
console.h1(course.getStartDate());

const c = config.getInstance();
c.loadConfig(
    'config2.json',
    (err, data) => {
        console.log('Lesson 12 Singleton Loaded:', err, data);
    }
);
//config.loadConfig();
// console.log(config.loadConfigSync());

console.log('--------------------------------------');

// Will wait for load if sync load is used
// console.log(config.getConfig());