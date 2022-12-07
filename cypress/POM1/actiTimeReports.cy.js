class Reports
{
    getReport() 
    {
        return cy.get('#container_reports');
    }
    getNewReport() 
    {
        return cy.get('#ext-gen18');
    }
    getCreateChart() 
    {
        return cy.get('.graphicButton.createChart');
    }
    getVerticalBar() 
    {
        return cy.get('#VERTICAL_BAR');
    }
    getVerticalBar() 
    {
        return  cy.get('#createChartLightbox_cancelBtn');
    }
    getHorizantalBar() 
    {
        return cy.get('#HORIZONTAL_BAR');
    }
    getPiechart() 
    {
        return cy.get('#PIE_CHART');
    }
    getReportDb() 
    {
        return cy.get('.reportNameWrapper');
    }
    getConfigureParameters() 
    {
        return cy.get('.configureButton.components_button');
    }
    toGenerateHTMLRpts() 
    {
        return cy.get('#applyReportConfiguration');
    }
    getAddtoDbBtn() 
    {
        return cy.get('.addToDashboard');
    }
    toSave() 
    {
        return cy.get('.saveNewConfigButton');
    }
    reportsDb() 
    {
        return cy.get('.secondLevelCell.selectedColNum3');
    }
    toValidateRpts() 
    {
        return cy.get('.config-name');
    }
}
export default Reports;