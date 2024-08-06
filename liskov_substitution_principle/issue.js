class Bird {
    fly() {
        console.log('Flying!!!');
    }
}

class Sparrow extends Bird { }

class Penguin extends Bird {
    fly() {
        throw new Error("Penguin can't fly");
    }
}

const letBirdFly = (bird) => {
    bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

letBirdFly(sparrow);
letBirdFly(penguin);

/** Above you can see inside Bird class there is fly method
 *  as Sparrow class inherits Bird class so it can call fly method and fare as well bcoz Sparrow can fly
 *  but when Penguin class inherits Bird class it has also access to fly method but Penguin can't fly so it modifies the definition of parent Bird class which violates LSP
  */