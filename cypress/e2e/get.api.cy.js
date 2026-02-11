/// <reference types="cypress" />

describe('Buscar Dispositivos', () => {

    it('Buscar um dispositivo específico', () => {

        const deviceId = '7'

        cy.buscarDeviceEspecifico(deviceId).as('getDeviceResult')

        cy.get('@getDeviceResult').then((response) => {

            expect(response.status).to.eq(200)

            expect(response.body).to.not.be.empty
            expect(response.body.id).to.eq(deviceId)
            expect(response.body.name).to.eq('Apple MacBook Pro 16')

            expect(response.body.data).to.exist

            expect(response.body.data.year).to.be.a('number')
            expect(response.body.data.year).to.eq(2019)

            expect(response.body.data.price).to.be.a('number')
            expect(response.body.data.price).to.eq(1849.99)

            expect(response.body.data['CPU model'])
                .to.be.a('string')
                .and.not.be.empty

            expect(response.body.data['Hard disk size'])
                .to.be.a('string')
                .and.not.be.empty
        })
    })
})
