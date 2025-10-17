const supertest = require('supertest');

const app = require('../app')
const request = supertest(app);

const url = '/tarefas';

let id = null;

describe('Teste do recurso /tarefas', () => {

    test('POST / deve retorna 201', async() => {
        const response = await request.post(url).send({ nome: "Estudar" });
        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body.nome).toBe("Estudar");
        expect(response.body.concluida).toBe(false);
        id = response.body.id;
    });

    test('GET / deve retorna 200', async() =>{
        const response = await request.get(url);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })

    test('GET /id deve retorna 200', async() => {
        const response = await request.get(`${url}/${id}`);
        expect(response.status).toBe(200)
        expect(response.body.id).toBeDefined();
    });

    test('GET /id deve retorna 404', async() => {
        const response = await request.get(`${url}/000000000000000000000000`);
        expect(response.status).toBe(404)
        expect(response.body.msg).toBe("Tarefa não encontrada");
    });



    test('PUT /id deve retorna 404', async() => {
        const response = await request.put(`${url}/000000000000000000000000`);
        expect(response.status).toBe(404)
        expect(response.body.msg).toBe("Tarefa não encontrada");
    });

    test('PUT /id deve retorna 200', async() => {
        const response = await request.put(`${url}/${id}`).send({ nome: "Estudar REST", concluida:true });
        expect(response.status).toBe(200)
        expect(response.body.id).toBeDefined();
    });

    test('DELETE /id deve retorna 204', async() => {
        const response = await request.delete(`${url}/${id}`);
        expect(response.status).toBe(204)
    });

    test('DELETE /id deve retorna 404', async() => {
        const response = await request.delete(`${url}/000000000000000000000000`);
        expect(response.status).toBe(404)
        expect(response.body.msg).toBe("Tarefa não encontrada");
    });



})