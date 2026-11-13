const test = require("node:test");
const assert = require("node:assert");
const { servicos, filtrarServicos } = require("../src/app.js");

test("lista de serviços não está vazia", () => {
  assert.ok(servicos.length > 0);
});

test("todo serviço tem nome, categoria, horário e contato", () => {
  servicos.forEach(s => {
    assert.ok(s.nome && s.categoria && s.horario && s.contato);
  });
});

test("busca filtra por categoria", () => {
  const r = filtrarServicos(servicos, "saúde");
  assert.ok(r.length >= 1);
  assert.ok(r.every(s => s.categoria.toLowerCase().includes("saúde")));
});