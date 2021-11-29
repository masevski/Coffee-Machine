/*Da se napravi klasa Kafemat sto ke funkcionira kako mashina za pravenje kafe.
Ima tri parametri: voda, kafe, mleko (ovie bi bile vkupna tezina vo gramovi, znaci treba da se brojki). Koga ja instancirame klasata zadavame pocetna vrednost za sekoj od ovie paramatri - na primer 100g kafe, 100g mleko i 1000g voda.
Da se napravi metod koj sto ke pravi casa kafe i koga ke go povikate da ispise poraka deka kafeto e gotovo. Za edna casa se potrebni 7g kafe,
100g voda i 20g mleko. 
Povikajte go metodot nekolku pati za da vidite dali sostojkite vi se troshat kako sto treba, slicno kako na chas sto vezbavme so avtomobilite.
Dokolku go povikate metodot za pravenje na kafe, a nemate dovolno od nekoja od sostojkite da se ispecati kolku grama i od koja sostojka falat.
Za kraj, klasata da ima uste edno property, koe sto ke vi kazuva kolku kafinja vkupno ste napravile. Pocetnata vrednost mu e nula */
class interfood {
    constructor(water, coffee, milk, counter) {
        this.water = water
        this.coffee = coffee
        this.milk = milk
        this.counter = counter
    }

    makeCoffee () {
        if (this.water >= 100 && this.coffee >= 7 && this.milk >= 20) {
            this.water -= 100
            this.coffee -= 7
            this.milk -= 20
            this.counter++
            console.log(`Napravivte ${this.counter} kafinja!`)
        }
            else {
                console.log(`Za da napravite kafe treba da imate 7g kafe, 100ml voda i 20ml mleko, dodeka masinata ima ${this.coffee}g kafe, ${this.water}ml voda i ${this.milk}ml mleko.`)
            }
    }
}

const myCoffee = new interfood (1000, 100, 100, 0)
myCoffee.makeCoffee()
myCoffee.makeCoffee()
myCoffee.makeCoffee()
myCoffee.makeCoffee()
myCoffee.makeCoffee()
myCoffee.makeCoffee()