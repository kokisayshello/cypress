describe('MYRA test Email Subscribe function', () => {
it('Click on Email Subscribe on the MYRA Status page and subscribe with random generated valid email', () => {
// Navigate to Myra Status web page
cy.visit('https://status.myrasecurity.com')
cy.contains('Email')
.should('be.visible')
.click()
// Verify that pop-up window to enter email addreess to Subscribe is get displayed
cy.contains('Please enter your email address:')
cy.contains('I have read and agree to the privacy policy as well as the general terms and conditions')		
//Start of JavaScript function that creates random fake email address
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for(var ii=0; ii<15; ii++){
string += chars[Math.floor(Math.random() * chars.length)];
}
//End of JavaScript function that creates random fake email address
// Verify and enter the random fake email address from JavaScript function above
cy.get("[type='email']")
.type(string + '@yahoo.com')	
.should('have.value', string + '@yahoo.com')
cy.get("[type='checkbox']")
.click()
cy.get("[type='Submit']")
// Submit the email for Subscribe
.click()
// Verify that email is entered and sent successfully
cy.contains('Mail entered.')
cy.contains('You should receive a confirmation mail soon.')
cy.get('button:contains("OK")')
.click();
cy.contains('Email')
.should('be.visible')

  })
})
