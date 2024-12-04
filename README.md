Steps to run the test

Prerequisite: ensure nodejs is installed in the system

########################################################################
initialise the package.json file by the following command: npm init

The test can be run through the cypress runner or directly in the terminal

########################
Cypress runner
- run command in terminal: npx cypress open
- select any browser then click on the feature file on the UI to run the test
#####
Note: this is not a UI test but the browser window is used to run and debug the test even if it's non-UI

########################
Terminal run
npx cypress run --spec cypress/e2e/Features/Test.feature


