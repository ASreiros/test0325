function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Vaisius{
    constructor(){
        this.dydis = this.rand(5,25)
        this.id = this.rand(1000000,9999999)
        this.prakastas = false;
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    prakasti(){
        this.prakastas = true
    }

}

const grauztukai = new Map()

class Krepsys{
    static vaisiai = []
    static pripildyti(){
        this.vaisiai = []; //sita eilute uztikrina, kad paleidus metoda gausim butent 20 nauju vaisiu. Jei paleisim 2 karta, gausim 20 kitokiu, o ne +20 vaisiu. 
        for (let i = 0; i < 20; i++) {
            const element = new Vaisius
            this.vaisiai.push(element)
        }
        this.rusioti()   
    }

    // metodas rusioti yra pagalbinis, ji paleidzia kiti metodai, kad isrusioti masyva. Kadangi mano manymu rusioti reikia 2 kartus, naudoju papildoma funkcija
    static rusioti(){    
        let counter = 1;
        while(counter !== 0){
            counter = 0;
            for (let i = 1; i < this.vaisiai.length; i++) {
                let first = this.vaisiai[i-1];
                let second = this.vaisiai[i];   
                if (first.dydis < second.dydis) {
                    this.vaisiai[i-1] = second;
                    this.vaisiai[i] = first;
                    counter++ 
                }
            }
        }    
    }

    static isimti(){
        const didelisVaisius = this.vaisiai[0]
        this.vaisiai.shift()
        console.log(didelisVaisius);
        didelisVaisius.prakasti()
        grauztukai.set(didelisVaisius.id, didelisVaisius)
    }
    static papildyti(){
        if(this.vaisiai.length < 20){
            const kiekis = 20 - this.vaisiai.length
            for (let i = 0; i < kiekis; i++) {
                const papildomasVaisius = new Vaisius
                this.vaisiai.unshift(papildomasVaisius)
            }
        }
        this.rusioti() //jei po papildymo rusioti nereikia, sita eilute reikia istrinti. Nebuvau tikras kaip teisingiau padaryti
    }


    constructor(){
    }

}




// console.log(Krepsys.vaisiai);
// Krepsys.pripildyti()
// console.log(Krepsys.vaisiai);
// Krepsys.isimti()
// Krepsys.isimti()
// Krepsys.isimti()
// console.log(Krepsys.vaisiai);
// console.log(grauztukai);
// Krepsys.papildyti()
// console.log(Krepsys.vaisiai);



