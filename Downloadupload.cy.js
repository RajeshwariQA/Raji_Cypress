import 'cypress-xpath'
describe('file upload',() => {

    it('file upload', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
       const filePath = 'logo.png';
       cy.xpath("(//input[@id='singleFileInput'])[1]").attachFile(filePath);
        cy.xpath("(//button[normalize-space()='Upload Single File'])[1]").click();
       
    })
})
describe('file download', function () {

    it('download the file', () => {
        cy.downloadFile('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
            'cypress/fixtures/Download', 'test.txt')
        cy.readFile('cypress/fixtures/Download/test.txt').should('contain', 'PDF Document creation from JavaScript')    
    })
})