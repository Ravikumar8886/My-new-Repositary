class Tasks
{
     getTask()
    {
        return cy.get('#container_tasks');
    }
    getAddNew()
    {
        return cy.get('.addNewContainer');
    }
    getNewCust()
    {
        return cy.get('.item.createNewCustomer');
    }
    giveName()
    {
        return cy.get('.newNameField.inputNameField');
    }
    giveDescription()
    {
        return cy.get("[placeholder='Enter Customer Description']");
    }
    toSelectDropDown()
    {
        return cy.get('.customerSelectorPlaceholder > .components_combobox > .comboboxButton > .dropdownButton');
    }
    toSelectItem()
    {
        return cy.get('.searchItemList > :nth-child(4)');
    }
    toValidateText()
    {
        return cy.get('.customerImportSettingsDiv > .components_informationBlock > .paragraphsPlaceholder > .informationBlockLine > .text');
    }
    createBtn()
    {
        return cy.get('.commitButtonPlaceHolder > .components_button > .components_button_label');
    }
    toValidateErrorMsg()
    {
        return cy.get('.customerNameDiv > .nameDuplicateError');
    }

    cancelBtn()
    {
        return cy.get('.buttonsBox > .greyButton');
    }
    toValidateName()
    {
        return  cy.get('.titleEditButtonContainer > .title');
    }

}

export default Tasks