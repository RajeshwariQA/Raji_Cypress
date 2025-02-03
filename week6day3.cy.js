import loginpa from "../support/week6day3sup/loginpa.js";
import homePage from "../support/week6day3sup/homepage.js";

import week6day3fix from "../fixtures/week6day3fix.json";
import 'cypress-xpath';
describe('amazon webpage', ()=>{
    it('amazon automation', ()=>{
        cy.viewport(1700, 1000);
        loginpa.launchPage(week6day3fix.amazonurl);
        loginpa.signIn(week6day3fix.username, week6day3fix.password);
        homePage.searchProduct(week6day3fix.AC);
        homePage.selectBrand();
        homePage.addCart();
    })
})