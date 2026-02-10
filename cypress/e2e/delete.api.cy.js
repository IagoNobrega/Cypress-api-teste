/// <reference types="cypress" />

describe('Deletar Dispositivos', () => {

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

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body
        }).then((postResponse) => {

            // valida POST
            expect(postResponse.status).to.eq(200)
            expect(postResponse.body.id).to.not.be.empty

            const deviceId = postResponse.body.id

            // DELETE usando o id criado
            cy.request({
                method: 'DELETE',
                url: `https://api.restful-api.dev/objects/${deviceId}`,
                failOnStatusCode: false
            }).then((deleteResponse) => {

                // valida DELETE
                expect(deleteResponse.status).to.eq(200)
                expect(deleteResponse.body.message).equal(`Object with id = ${deviceId} has been deleted.`)
            })
        })
    })
})
