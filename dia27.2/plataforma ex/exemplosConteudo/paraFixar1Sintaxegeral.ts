class Superclass {
    constructor(public isSuper: boolean) {}

    get age() {
        if(this.isSuper === true)
    };

    sayHello() {
        console.log("Olá mundo!")
    }
}

class Subclass extends Superclass {

}

const objSuperclass = (subclass: Subclass) => {
    subclass.sayHello()
}