import loginp from '../support/week6day4sup/loginp.js';
import selectProduct from '../support/week6day4sup/selectProduct.js';
import saucedemoCredentials from '../fixtures/week6day4fix.json';
import 'cypress-xpath';

describe('saucedemo webpage', ()=>{
    it('saucedemo automation', ()=>{
        loginp.visit(saucedemoCredentials.saucedemourl);
        loginp.login(saucedemoCredentials.username,saucedemoCredentials.password);
       selectProduct.selectProduct(saucedemoCredentials.firstname, saucedemoCredentials.lastname,saucedemoCredentials.postalcode);
    })
})