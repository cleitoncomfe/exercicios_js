/*
this.name="Cleiton"

console.log(this.name)

function sayName(){
    console.log(this.name)
}

const sayName2=()=>{
    console.log(this.name)
}

sayName=sayName.bind(this)
sayName()
sayName2()

//sayName=sayName.bind(this)

*/

class Gato{
    constructor(){
        this.name="Mimi"
        miar2=miar2.bind(this)
    }

    miar(){
        console.log(this.name + " Miando...")
    }
}

gato=new Gato()
gato.miar()

function miar2(){
    console.log(this.name + " Miando outra vez")
}

miar2()
