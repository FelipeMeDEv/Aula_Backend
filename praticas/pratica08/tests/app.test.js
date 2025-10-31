const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('Testes da API', () => {
  test('GET /produtos sem token deve retornar 401', async () => {
    const response = await request.get('/produtos');
    expect(response.status).toBe(401);
    expect(response.body.msg).toBe('Não autorizado');
  });
});