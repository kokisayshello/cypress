// Manual Testing Task

The manual test cases are into "Manual test task.pdf" file attached

// Test Automation

The JavaScript file "MYRA.cy.js" uploaded here covers E2E automation test of MYRA Status Subscribe function via email address.
The script can be easily downloaded and run with Cypress app.
The email that is used for E2E automation test is fake and randomly generated any time new test is start.

// Additional steps to take in order to assure full testing coverage:

1. Add negative test when invalid email address is used
2. Add test when email address is already subscribed
3. Add test when valid email address is used, but checkbox "I have read and agree to the privacy policy as well as the general terms and conditions" is unchecked and user click on "Submit"
4. Add test when user click on "Submit", but no email is entered

// Possible blockers
1. The pop-up message that invalid email address is entered OR that checkbox for privacy policy is unchecked might be hard to verified with Cypress automation framework app
2. The email to Subscribe must be unique ( once used it can not be used again for test)
