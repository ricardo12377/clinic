describe('template spec', () => {
  it('register doctor step', () => {
    // verificando se foi pra rota desejada quando clica no botão de cadastrar doutor
    cy.visit('http://localhost:3004');
    cy.get('ul').find('#registerDoctor').click();
    cy.url().should('include', '/registerdoctor');

    // inserindo o campo nome do formulario
    cy.get('form')
      .find('input[name="name"]')
      .type('Doutor do E2E')
      .should('have.value', 'Doutor do E2E');

    // inserindo o campo email do formulario
    cy.get('form')
      .find('input[name="email"]')
      .type('doctore2e@gmail.com')
      .should('have.value', 'doctore2e@gmail.com');

    // clicando no botão de submit
    cy.get('form').submit();

    // verificando se o site redirecionou para o path desejado
    cy.url().should('include', '/');
  });
});
