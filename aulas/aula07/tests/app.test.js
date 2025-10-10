const request = require("supertest");
const app = require("../app");

let tarefaCriada;

describe("Testes da API de Tarefas", () => {
  it("GET /tarefas deve retornar 200 e JSON", async () => {
    const res = await request(app).get("/tarefas");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("POST /tarefas deve criar uma nova tarefa", async () => {
    const res = await request(app)
      .post("/tarefas")
      .send({ nome: "Estudar Node", concluida: false });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.nome).toBe("Estudar Node");

    tarefaCriada = res.body;
  });

  it("GET /tarefas/:id deve retornar a tarefa criada", async () => {
    const res = await request(app).get(`/tarefas/${tarefaCriada.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe("Estudar Node");
  });

  it("GET /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).get("/tarefas/1");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Tarefa não encontrada" });
  });

  it("PUT /tarefas/:id deve atualizar a tarefa", async () => {
    const res = await request(app)
      .put(`/tarefas/${tarefaCriada.id}`)
      .send({ nome: "Estudar Node e Express", concluida: true });

    expect(res.statusCode).toBe(200);
    expect(res.body.concluida).toBe(true);
  });

  it("PUT /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).put("/tarefas/1").send({ concluida: true });
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Tarefa não encontrada" });
  });

  it("DELETE /tarefas/:id deve remover a tarefa", async () => {
    const res = await request(app).delete(`/tarefas/${tarefaCriada.id}`);
    expect(res.statusCode).toBe(204);
  });

  it("DELETE /tarefas/1 deve retornar 404", async () => {
    const res = await request(app).delete("/tarefas/1");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ msg: "Tarefa não encontrada" });
  });
});
