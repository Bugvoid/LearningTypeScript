var Produtos = /** @class */ (function () {
    function Produtos(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produtos.prototype.getDados = function () {
        return "Nome: " + this.nome + "\n Preco: " + this.preco;
    };
    return Produtos;
}());
