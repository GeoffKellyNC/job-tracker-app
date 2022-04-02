/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe("Application Form", () => {
    //?Refreshing the page

    beforeEach(() => {
        cy.visit("http://localhost:3000/form")
    })

    //? Setting Helpers

    const companyNameInput = () => cy.get("input[name = companyName]") 
    
    const companyPhoneInput = () => cy.get("input[name = companyPhone]")

    const companyWebsiteInput = () => cy.get("input[name = companyWeb]")

    const jobTitleInput = () => cy.get("input[name = jobTitle]")

    const dateAppliedInput = () => cy.get("input[name = dateApplied]")

    const jobDiscoveryInput = () => cy.get("input[name = jobDiscovery]")

    const salaryInfoInput = () => cy.get("input[name = salaryInfo]")

    const contactedSelect = () => cy.get("select[name = contactQues]")

    const contactNameInput = () => cy.get("input[name = contactName]")

    const contactPhoneInput = () => cy.get("input[name = contactPhone]")

    const contactEmailInput = () => cy.get("input[name = contactEmail]")

    const contactPositionInput = () => cy.get("input[name = contactPosition]")

    const currentStatusSelect = () => cy.get("select[name = currentStatus]")

    const otherNotesTextarea = () => cy.get("textarea[name = otherNotes]")

    const submitButton = () => cy.get("button[type = submit]")

    const backButton = () => cy.get("button[class = back-btn]")

    it("Sanity Check for Tests", () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({})
    })

    it("Proper Elements are showing", () => {
        companyNameInput().should("exist")
        companyPhoneInput().should("exist")
        companyWebsiteInput().should("exist")
        jobTitleInput().should("exist")
        dateAppliedInput().should("exist")
        jobDiscoveryInput().should("exist")
        salaryInfoInput().should("exist")
        contactedSelect().should("exist")
        contactNameInput().should("exist")
        contactPhoneInput().should("exist")
        contactEmailInput().should("exist")
        contactPositionInput().should("exist")
        currentStatusSelect().should("exist")
        otherNotesTextarea().should("exist")
        submitButton().should("exist")
        backButton().should("exist")

        cy.contains(/job tracker/i).should('exist')
    })

    it("Form is working", () => {
        companyNameInput().type("Test Company")
        companyPhoneInput().type("123456789")
        companyWebsiteInput().type("www.test.com")
        jobTitleInput().type("Test Job")
        jobDiscoveryInput().type("Test Discovery")
        salaryInfoInput().type("Test Salary")
        contactedSelect().select("Yes")
        contactNameInput().type("Test Name")
        contactPhoneInput().type("123456789")
        contactPositionInput().type("Test Position")
        currentStatusSelect().select("Interview Phase")
        otherNotesTextarea().type("Test Notes")
    })
})