const strapi = require('@strapi/strapi');
console.log("__start__")
strapi.createStrapi({ distDir: './dist' }).start();