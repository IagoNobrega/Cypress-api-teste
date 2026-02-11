/// <reference types="cypress" />

describe('Deletar Dispositivos', () => {

    it('Deletar um dispositivo inexistente', () => {

        const idInexistente = 'iago'

        cy.deletarDevice(idInexistente).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.error)
                .to.eq(`Object with id = ${idInexistente} doesn't exist.`)
        })
    })

    it('Deletar um dispositivo específico', () => {

        const body = {
            name: "Celular Da gde ",
            data: {
                year: 2026,
                price: 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                owner: "GDE LTDA"
            }
        }

        // cria o device
        cy.request({
            method: 'POST',
            url: '/objects',
            body
        }).then((postResponse) => {

            expect(postResponse.status).to.eq(200)
            expect(postResponse.body.id).to.not.be.empty

            const deviceId = postResponse.body.id

            // deleta usando command
            cy.deletarDevice(deviceId).then((deleteResponse) => {
                expect(deleteResponse.status).to.eq(200)
                expect(deleteResponse.body.message)
                    .to.eq(`Object with id = ${deviceId} has been deleted.`)
            })
        })
    })
})
