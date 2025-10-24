const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

const url = '/produtos';
let produtoId = null;

describe('Testes da API de Produtos', () => {

    test('POST / deve retornar 201', async () => {
        const response = await request.post(url).send({ nome: "Laranja", preco: 10.0 });
        expect(response.status).toBe(201);
        expect(response.body._id).toBeDefined();
        expect(response.body.nome).toBe("Laranja");
        expect(response.body.preco).toBe(10.0);
        produtoId = response.body._id;
    });

    test('POST / sem JSON deve retornar 422', async () => {
        const response = await request.post(url).send({});
        expect(response.status).toBe(422);
        expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios");
    });

    test('GET / deve retornar 200', async () => {
        const response = await request.get(url);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('GET /id deve retornar 200', async () => {
        const response = await request.get(`${url}/${produtoId}`);
        expect(response.status).toBe(200);
        expect(response.body._id).toBeDefined();
        expect(response.body.nome).toBe("Laranja");
        expect(response.body.preco).toBe(10.0);
    });

    test('GET /id inválido deve retornar 400', async () => {
        const response = await request.get(`${url}/0`);
        expect(response.status).toBe(400);
        expect(response.body.msg).toBe("Parâmetro inválido");
    });

    test('GET /id inexistente deve retornar 404', async () => {
        const response = await request.get(`${url}/000000000000000000000000`);
        expect(response.status).toBe(404);
        expect(response.body.msg).toBe("Produto não encontrado");
    });

    test('PUT /id deve retornar 200', async () => {
        const response = await request.put(`${url}/${produtoId}`).send({ nome: "Laranja Pera", preco: 18.0 });
        expect(response.status).toBe(200);
        expect(response.body._id).toBeDefined();
        expect(response.body.nome).toBe("Laranja Pera");
        expect(response.body.preco).toBe(18.0);
    });

    test('PUT /id com nome vazio deve retornar 422', async () => {
        const response = await request.put(`${url}/${produtoId}`).send({ nome: " ", preco: 10 });
        expect(response.status).toBe(422);
        expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios");
    });
    
    test('PUT /id com nome muito curto deve retornar 422', async () => {
        const response = await request.put(`${url}/${produtoId}`).send({ nome: "a", preco: 10 });
        expect(response.status).toBe(422);
        expect(response.body.msg).toBe("Nome deve ter pelo menos 3 caracteres");
    });
    

    test('PUT /id inválido deve retornar 400', async () => {
        const response = await request.put(`${url}/0`);
        expect(response.status).toBe(400);
        expect(response.body.msg).toBe("Parâmetro inválido");
    });

    test('PUT /id inexistente deve retornar 404', async () => {
        const response = await request.put(`${url}/000000000000000000000000`).send({ nome: 'Inexistente', preco: 1.0 });
        expect(response.status).toBe(404);
        expect(response.body.msg).toBe("Produto não encontrado");
    });

    test('DELETE /id deve retornar 204', async () => {
        const response = await request.delete(`${url}/${produtoId}`);
        expect(response.status).toBe(204);
    });

    test('DELETE /id inválido deve retornar 400', async () => {
        const response = await request.delete(`${url}/0`);
        expect(response.status).toBe(400);
        expect(response.body.msg).toBe("Parâmetro inválido");
    });

    test('DELETE /id inexistente deve retornar 404', async () => {
        const response = await request.delete(`${url}/${produtoId}`);
        expect(response.status).toBe(404);
        expect(response.body.msg).toBe("Produto não encontrado");
    });
});
