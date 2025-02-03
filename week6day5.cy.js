import 'cypress-xpath';
describe('ultimate QA', ()=>{
    it('iltimate QA', ()=>{
    cy.visit("https://courses.ultimateqa.com/collections");
    cy.xpath("(//h3[contains(text(),'C# For QA Automation Engineers with Selenium Webdr')])[1]").click();
cy.xpath("(//a[normalize-space()='Get started now'])[1]").click();
cy.get('#account-info-email').type('rajeshwari@qaoncloud.com');
cy.get('#input-2').type('Raji');
cy.get('#input-3').type('Siva');
cy.get("label[for='terms-and-privacy-checkbox']").click();
cy.xpath("(//button[normalize-space()='Sign up'])[1]").click();
    })
})