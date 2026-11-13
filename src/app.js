const servicos = [
  { nome: "UBS Vila Esperança", categoria: "Saúde", horario: "Seg a Sex, 7h às 17h", contato: "(11) 3000-0001" },
  { nome: "Poupatempo Central", categoria: "Documentos", horario: "Seg a Sáb, 7h às 19h", contato: "(11) 3000-0002" },
  { nome: "CRAS Jardim Cidadania", categoria: "Assistência Social", horario: "Seg a Sex, 8h às 17h", contato: "(11) 3000-0003" },
  { nome: "Defesa Civil Municipal", categoria: "Emergência", horario: "24 horas", contato: "199" },
  { nome: "Biblioteca Pública Municipal", categoria: "Educação e Cultura", horario: "Ter a Sáb, 9h às 18h", contato: "(11) 3000-0005" }
];

function filtrarServicos(lista, termo) {
  const t = (termo || "").toLowerCase().trim();
  if (!t) return lista;
  return lista.filter(s => (s.nome + " " + s.categoria).toLowerCase().includes(t));
}

function renderizar(lista) {
  const el = document.getElementById("lista");
  if (lista.length === 0) {
    el.innerHTML = "<p>Nenhum serviço encontrado.</p>";
    return;
  }
  el.innerHTML = lista.map(s => `
    <article class="card">
      <h2>${s.nome}</h2>
      <span class="tag">${s.categoria}</span>
      <p>Horário: ${s.horario}</p>
      <p>Contato: ${s.contato}</p>
    </article>`).join("");
}

if (typeof document !== "undefined") {
  renderizar(servicos);
  document.getElementById("busca").addEventListener("input", e => {
    renderizar(filtrarServicos(servicos, e.target.value));
  });
}

if (typeof module !== "undefined") {
  module.exports = { servicos, filtrarServicos };
}