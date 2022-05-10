/// <reference types="cypress" />

describe('Converter Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
  });

  it('displays two todo items by default', () => {
    cy.get('.input select');
    cy.get('.input textarea');
    cy.get('button').should('have.length', 2);
    cy.get('.output textarea');
    cy.get('.output select');
  });

  it('hex-dec && dec-hex', () => {
    cy.get('.input select').select('4');
    cy.get('.input textarea').type('10');
    cy.get('.output select').select('3');
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '16');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', 'a');
  });
  it('hex-bin && bin-hex', () => {
    cy.get('.input select').select('4');
    cy.get('.input textarea').type('10');
    cy.get('.output select').select('1');
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '10000');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '2');
  });
  it('hex-octal && octal-hex', () => {
    cy.get('.input select').select('4');
    cy.get('.input textarea').type('10');
    cy.get('.output select').select('2');
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '20');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '8');
  });
  it('bin-dec && dec-bin', () => {
    cy.get('.input select').select('1');
    cy.get('.input textarea').type('10');
    cy.get('.output select').select('3');
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '2');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '1010');
  });
  it('bin-octal && octal-bin', () => {
    cy.get('.input select').select('1');
    cy.get('.input textarea').type('1010');
    cy.get('.output select').select('2');
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '12');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '1000001000');
  });
  it('dec-octal && octal-dec', () => {
    cy.get('.input select').select('3');
    cy.get('.input textarea').type('10');
    cy.get('.output select').select('2');
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '12');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('.output textarea').should('have.value', '8');
  });
});
