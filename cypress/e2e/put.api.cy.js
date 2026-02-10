/// <reference types="cypress" />

describe('Atualizar Dispositivos (PUT)', () => {

    it('Atualizar dispositivo com data, hora e empresa responsável', () => {

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

        // data e hora atual (YYYY-MM-DD HH:mm)
        const dataHoraAtual = new Date().toISOString().slice(0, 16)

        const updatedBody = {
            name: "Celular Da gde - Atualizado",
            data: {
                year: 2027,
                price: 1999.99,
                "CPU model": "Intel Core i7",
                "Hard disk size": "2 TB",
                owner: "GDE LTDA",

                // novos campos de auditoria
                updatedBy: "GDE LTDA",
                updatedAtClient: dataHoraAtual
            }
        }

        // POST - cria
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body
        }).then((postResponse) => {

            expect(postResponse.status).to.eq(200)
            const deviceId = postResponse.body.id

            // PUT - atualiza
            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${deviceId}`,
                body: updatedBody
            }).then((putResponse) => {

                // validações gerais
                expect(putResponse.status).to.eq(200)
                expect(putResponse.body.id).to.eq(deviceId)

                // valida auditoria
                expect(putResponse.body.updatedAt).to.exist
                expect(putResponse.body.updatedAt.slice(0, 16))
                    .to.eq(dataHoraAtual)

                expect(putResponse.body.data.updatedBy)
                    .to.eq("GDE LTDA")

                expect(putResponse.body.data.updatedAtClient)
                    .to.eq(dataHoraAtual)
            })
        })
    })
})
