// Lista dos produtos (eletrônicos)
const produtos = [
  {
    id: 1,
    nome: "Smartphone XYZ",
    preco: 1599.99,
    descricao: "Smartphone moderno com tela AMOLED de 6.5'', 128GB, câmera tripla e bateria de longa duração.",
    imagem: "https://via.placeholder.com/300x200?text=Smartphone+XYZ"
  },
  {
    id: 2,
    nome: "Notebook ABC",
    preco: 3299.50,
    descricao: "Notebook potente com processador Intel i7, 16GB RAM, SSD de 512GB e placa gráfica dedicada.",
    imagem: "https://via.placeholder.com/300x200?text=Notebook+ABC"
  },
  {
    id: 3,
    nome: "Fone de Ouvido Bluetooth",
    preco: 299.90,
    descricao: "Fone de ouvido sem fio com cancelamento de ruído, bateria para 20h e conexão Bluetooth 5.0.",
    imagem: "https://via.placeholder.com/300x200?text=Fone+de+Ouvido"
  },
  {
    id: 4,
    nome: "Smartwatch Pro",
    preco: 899.00,
    descricao: "Smartwatch com monitoramento cardíaco, GPS, resistência à água e várias funcionalidades esportivas.",
    imagem: "https://via.placeholder.com/300x200?text=Smartwatch+Pro"
  }
];

// Função para salvar carrinho no localStorage
function salvarCarrinho(carrinho) {
  localStorage.setItem("shopora_carrinho", JSON.stringify(carrinho));
}

// Função para carregar carrinho do localStorage
function carregarCarrinho() {
  return JSON.parse(localStorage.getItem("shopora_carrinho")) || [];
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
  let carrinho = carregarCarrinho();
  const produtoExistente = carrinho.find(item => item.id === id);
  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    carrinho.push({id: id, quantidade: 1});
  }
  salvarCarrinho(carrinho);
  alert("Produto adicionado ao carrinho!");
}

// Pegar produto pelo id
function pegarProdutoPorId(id) {
  return produtos.find(p => p.id === id);
}
