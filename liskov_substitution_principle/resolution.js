class Bird {
    move() {
        console.log("Moving!");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log('Flying!!!');
    }
}

class Sparrow extends FlyingBird { }

class Penguin extends Bird {
    swim() {
        console.log('Swimming!!');
    }
}

letFlyingBirdFly = (bird) => {
    bird.fly();
}

makeBirdMove = (bird) => {
    bird.move();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

letFlyingBirdFly(sparrow);
// letFlyingBirdFly(penguin);

makeBirdMove(sparrow);
makeBirdMove(penguin);

/** Above code differentiate classes according to capabilities of Bird so it doesn't violates LSP */