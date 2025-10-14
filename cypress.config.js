const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://kasirdemo.vercel.app',
    supportFile : 'cypress/support/e2e.js'
  }
});
