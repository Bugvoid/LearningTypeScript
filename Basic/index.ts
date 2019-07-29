class Produtos {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  getDados() {
    return "Nome: " + this.nome + "\n Preco: " + this.preco;
  }
}
