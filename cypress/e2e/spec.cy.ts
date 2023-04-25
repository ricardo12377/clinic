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

  it('register consult step', () => {
    // verificando se foi pra rota desejada quando clica no botão de cadastrar doutor
    cy.visit('http://localhost:3004');
    cy.get('ul').find('#registerConsult').click();
    cy.url().should('include', '/registerconsult');

    // inserindo o campo nome do formulario
    cy.get('form')
      .find('input[name="title"]')
      .type('COnsulta com paciente grave')
      .should('have.value', 'COnsulta com paciente grave');

    // inserindo o campo email do formulario
    cy.get('form')
      .find('input[name="obs"]')
      .type('atendete o mais rapido possivel')
      .should('have.value', 'atendete o mais rapido possivel');

    cy.get('form')
      .find('input[name="client"]')
      .type('maria')
      .should('have.value', 'maria');

    cy.get('select')
      .select('Doutor do E2E')
      .should('have.value', '7fdad5a5-cea6-4400-aeab-83cda173f243');

    // clicando no botão de submit
    cy.get('form').submit();

    // verificando se o site redirecionou para o path desejado
    cy.url().should('include', '/');
  });

  it('render a list of consults and doctors in main page', () => {
    cy.visit('http://localhost:3004/');
    cy.get('div').find('#consultCard');
    cy.get('div').find('#doctorCard');
  });
});
