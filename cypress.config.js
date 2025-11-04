const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://kasirdemo.vercel.app',
    supportFile : 'cypress/support/e2e.js',
    scrollBehavior : 'center',
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video : false,
    screenshotOnRunFailure : true
  },
  reporter : 'cypress-mochawesome-reporter',
  reporterOptions : {
    reportDir : 'cypress/reports',
    overwrite : true,
    html : true,
    json : false,
    embeddedScreenshots : true,
    inlineAssets : true
  },
});
