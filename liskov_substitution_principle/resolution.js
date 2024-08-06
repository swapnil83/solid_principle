class Bird { }

class FlyingBird {
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

const sparrow = new Sparrow();
const penguin = new Penguin();

letFlyingBirdFly(sparrow);
// letFlyingBirdFly(penguin);

/** Above code differentiate classes according to capabilities of Bird so it doesn't violates LSP */