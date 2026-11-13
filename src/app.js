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
  el.textContent = "";

  if (lista.length === 0) {
    const vazio = document.createElement("p");
    vazio.textContent = "Nenhum serviço encontrado.";
    el.appendChild(vazio);
    return;
  }

  lista.forEach(s => {
    const card = document.createElement("article");
    card.className = "card";

    const titulo = document.createElement("h2");
    titulo.textContent = s.nome;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = s.categoria;

    const horario = document.createElement("p");
    horario.textContent = "Horário: " + s.horario;

    const contato = document.createElement("p");
    contato.textContent = "Contato: " + s.contato;

    card.append(titulo, tag, horario, contato);
    el.appendChild(card);
  });
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