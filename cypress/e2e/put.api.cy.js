/// <reference types="cypress" />

describe('Atualizar Dispositivo', () => {

    beforeEach(() => {
        cy.fixture('cadastrar_device').as('device')
    })

    it('Atualizar um dispositivo com sucesso', function () {

        cy.criarDevice(this.device.deviceValido)
            .then((postResponse) => {

                const deviceId = postResponse.body.id

                cy.atualizarDevice(deviceId, this.device.deviceAtualizado)
                    .then((putResponse) => {
                        expect(putResponse.status).to.eq(200)
                        expect(putResponse.body.name)
                            .to.eq(this.device.deviceAtualizado.name)
                    })
            })
    })
})
