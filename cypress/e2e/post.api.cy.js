/// <reference types="cypress" />

describe('Cadastro de Dispositivos', () => {

    beforeEach(() => {
        cy.fixture('cadastrar_device').as('device')
    })

    it('Cadastrar um dispositivo sem enviar dados', function () {
        cy.criarDevice(this.device.deviceInvalido)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.contain('400 Bad Request')
            })
    })

    it('Cadastrar um dispositivo específico com sucesso', function () {
        cy.criarDevice(this.device.deviceValido)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.not.be.empty
                expect(response.body.name).to.eq(this.device.deviceValido.name)
            })
    })
})
