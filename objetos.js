// Objeto Literal
const carro={
    cor: "red",
    pot: "100cc",

    showDetalhes: function(){
        console.log(this.cor + " - " + this.pot)
    }
}
/*
carro.showDetalhes()
carro.cor="black"
carro.showDetalhes() */

//Factory
function Carro(){
    let cor="azul"
    let pot="200cc"

    return {
        cor,
        pot
    }
}

console.log(Carro())
Carro.prototype.cor="white"
c=new Carro()
c.cor="white"
console.log(c)
