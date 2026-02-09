/// <reference types="cypress" />

describe('Buscar Dispositivos', () => {

    it('Buscar um dispositivo específico', () => {

        const deviceId = '7'

        cy.request({
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${deviceId}`,
            failOnStatusCode: false
        }).as('getDeviceResult')

        //validações
        cy.get('@getDeviceResult')
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).equal(deviceId)
                expect(response.body.name).equal('Apple MacBook Pro 16')
                expect(response.body).not.empty

                expect(response.body.data.year).not.string
                expect(response.body.data.year).equal(2019)

                expect(response.body.data.price).not.string
                expect(response.body.data.price).equal(1849.99)

                expect(response.body.data['CPU model'])
                    .to.be.a('string')
                    .and.not.be.empty

                expect(response.body.data['Hard disk size'])
                    .to.be.a('string')
                    .and.not.be.empty





            })

    })
})